const { logger } = require('../utils/logger');
const UserDAO = require('../models/DAO/user');
const bcrypt = require('bcryptjs');
const boom = require('@hapi/boom');

module.exports = class UserService {
  async register(user) {
    try {
      const users = await new UserDAO();
      return users.create(user);
    } catch (err) {
      logger.error(err);
      return err;
    }
  }

  async getAll() {
    try {
      const users = await new UserDAO().read();

      if (users === undefined) {
        return boom.notFound(users);
      }
      return users;
    } catch (err) {
      logger.error(err);
      return err;
    }
  }

  async getById(id) {
    try {
      const user = await new UserDAO().getOne(id);
      if (user === undefined) {
        return boom.notFound(user);
      }
      return user;
    } catch (err) {
      logger.error(err);
      return err;
    }
  }

  async getEmail(email) {
    try {
      const user = await new UserDAO().getByEmail(email);
      if (user === undefined) {
        return boom.notFound(user);
      }
      return user;
    } catch (err) {
      logger.error(err);
      return err;
    }
  }

  async updateUser(data) {
    try {
      const user = new UserDAO();
      const payload = {
        id: data.id,
        username: data.username,
        image: data.image,
        phone: data.phone,
      };
      return user.update(payload);
    } catch (error) {
      logger.error(error);
      return error;
    }
  }

  async destroy(id) {
    try {
      return new UserDAO().delete(id);
    } catch (err) {
      logger.error('[]');
      return err;
    }
  }

  async checkLogin(email, password) {
    try {
      const user = await new UserDAO().getByEmail(email);
      if (!user) {
        return boom.notFound(user);
      }
      const isValid = bcrypt.compareSync(password, user.password);
      if (!isValid) {
        return boom.unauthorized(isValid);
      }
      return {
        id: user._id,
        username: user.username,
        role: user.role,
      };
    } catch (err) {
      return err;
    }
  }
};
