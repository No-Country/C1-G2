const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/index');
const { logger } = require('../utils/logger');
exports.getConnection = async () => {
  // mongoose.set('useCreateIndex', true)
  await mongoose.connect(MONGO_URI, {
    // dbName: 'pet-adoption',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  logger.info('DB connected');
};
