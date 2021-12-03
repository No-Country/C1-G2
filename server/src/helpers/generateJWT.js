const jwt = require('jsonwebtoken');
const { logger } = require('../utils/logger');

const generateJWT = (uid) => {
  const payload = { uid };

  logger.info('PAYLOAD:', payload);
  logger.info('uid:', uid);

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '24h',
      },
      (err, token) => {
        if (err) {
          logger.error(err);
          reject();
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateJWT;
