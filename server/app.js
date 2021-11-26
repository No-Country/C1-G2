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

const usersRouter = require('./src/routes/users.routes');
const petsRouter = require('./src/routes/pet.routes');
const ongRouter = require('./src/routes/ong.router');
const { getConnection } = require('./src/models/connection');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//routes
<<<<<<< HEAD
app.use(PREFIX, petsRouter);
app.use(PREFIX, usersRouter);
app.use(PREFIX, petsRouter);
app.use(PREFIX, ongRouter);
=======
app.use(PREFIX, usersRouter);
app.use(PREFIX, petsRouter);
app.use('/ong/', ongRouter);
>>>>>>> develop

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
