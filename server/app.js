const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const PREFIX = '/api/pet-adoption/';
const app = express();
const cors = require('cors');
const corsOptions = {
  origin: '*',
};

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);

app.get(`${PREFIX}health`, (req, res) => {
  res.status(200).send({ status: 'OK' });
});

app.listen(PORT, async () => {
  logger.info(`Listening on port: http://localhost:${PORT}`);
});
