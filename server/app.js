const express = require('express');
const morgan = require('morgan');
const PREFIX = '/api/';
const app = express();
const cors = require('cors');

const { logger } = require('./src/utils/logger');
const corsOptions = {
  origin: '*',
};
const { PORT } = require('./src/config/index');
const { validateJWT } = require('./src/middlewares/auth.handler');
const usersRouter = require('./src/routes/users.routes');
const authRouter = require('./src/routes/auth.routes');
const petsRouter = require('./src/routes/pet.routes');
const ongsRouter = require('./src/routes/ong.routes');
const formRouter = require('./src/routes/form.routes');
const { getConnection } = require('./src/models/connection');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(express.static('public/dist'));

//routes
app.use(`${PREFIX}form`, formRouter);
app.use(`${PREFIX}pets`, petsRouter);
app.use(`${PREFIX}users`, usersRouter);
app.use(`${PREFIX}auth`, authRouter);
app.use(`${PREFIX}ongs`, [validateJWT], ongsRouter);
app.get('/admin/*', (req, res) => {
  res.sendFile(__dirname + '/src/public/dist/ng-adminpro/');
});
app.get(`${PREFIX}health`, (req, res) => {
  res.status(200).json({ status: 'OK' });
});

getConnection()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Listening on port: http://localhost:${PORT}`);
    });
  })
  .catch(logger.error);

module.exports = app;
