const { logger } = require('../../utils/logger');
const users = require('../schemas/user');

module.exports = class UserDAO {
  create(user) {
    try {
      const saveModelUser = new users(user);
      return saveModelUser.save();
    } catch (error) {
      logger.error(error);
    }
  }

  read() {
    try {
      return users.find({});
    } catch (error) {
      logger.error(error);
    }
  }

  readById(id) {
    try {
      return users.findById({ _id: id });
    } catch (error) {
      logger.error(error);
    }
  }
  async update(data) {
    try {
      const { id, title, thumbnail, price, stock } = data;
      const filter = { _id: id };
      const update = {
        title,
        thumbnail,
        price,
        stock,
        updated_at_utc: Date.now(),
      };

      const result = Promise.resolve(users.findOneAndUpdate(filter, update));
      await result;
      return users.findOne(filter);
    } catch (error) {
      logger.error(error);
    }
  }

  delete(id) {
    try {
      return users.findByIdAndDelete({ _id: id });
    } catch (error) {
      logger.error(error);
    }
  }

  getByName(name) {
    try {
      return users.find({ name });
    } catch (error) {
      logger.error(error);
    }
  }
};
