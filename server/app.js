const express = require('express');
const morgan = require('morgan');
const PREFIX = '/api/pet-adoption/';
const app = express();
const cors = require('cors');
const { logger } = require('./src/utils/logger');
const corsOptions = {
  origin: '*',
};
const { PORT } = require('./src/config/index');
const petsAdoptionRouter = require('./src/routes/pets.adoption');


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//routes
app.use('/pets/', petsAdoptionRouter);


app.get(`${PREFIX}health`, (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(PORT, async () => {
  logger.info(`Listening on port: http://localhost:${PORT}`);
});
