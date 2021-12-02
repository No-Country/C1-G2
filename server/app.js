const express = require('express');
const morgan = require('morgan');
const PREFIX = '/api/pet_adoption/';
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
const { getConnection } = require('./src/models/connection');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(express.static('public/dist'));

//routes

app.use(`${PREFIX}pets`, validateJWT, petsRouter);
app.use(`${PREFIX}users`, validateJWT, usersRouter);
app.use(`${PREFIX}auth`, authRouter);
app.use(`${PREFIX}ongs`, validateJWT, ongsRouter);
//app.get('/*', (req, res) => {
//  res.sendFile(__dirname + '/src/public/dist/ng-adminpro/');
//});
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
