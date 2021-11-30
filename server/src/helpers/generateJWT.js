const jsonwebtoken = require('jsonwebtoken');
const { logger } = require('../utils/logger');

const generateJWT = async (uid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jsonwebtoken.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '4h',
      },
      (err, token) => {
        if (err) {
          logger.error('Error al generar Token', err);
          reject('Se generó un error al generar el token');
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateJWT;
