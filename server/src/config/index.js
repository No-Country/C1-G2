require('dotenv').config();

const { NODE_ENV } = process.env;

let currentEnv;

if (NODE_ENV == 'production') {
  currentEnv = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  };
} else if (NODE_ENV == 'development') {
  currentEnv = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: process.env.LOCAL_MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  };
}

module.exports = currentEnv;
