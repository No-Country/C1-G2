const { logger } = require('../../utils/logger');
const users = require('../schemas/user.model');

module.exports = class UserDAO {
  async create(user) {
    try {
      const saveModelUser = new users(user);
      return await saveModelUser.save();
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  async read() {
    try {
      return await users.find({});
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  async getOne(id) {
    try {
      return await users.findById({ _id: id });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }
  async update(data) {
    try {
      const { id, username, image, phone } = data;
      const filter = { _id: id };
      const update = {
        username,
        image,
        phone,
        updated_at: Date.now(),
      };

      const result = Promise.resolve(users.findOneAndUpdate(filter, update));
      await result;
      return users.findOne(filter);
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  delete(id) {
    try {
      return users.findByIdAndDelete({ _id: id });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  getByEmail(email) {
    try {
      return users.findOne({ email });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }
};
