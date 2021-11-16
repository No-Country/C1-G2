const winston = require('winston');

exports.logger = winston.createLogger({
  level: 'warn',
  format: winston.format.simple(),
  transports: [new winston.transports.Console({ level: 'verbose' })],
});
