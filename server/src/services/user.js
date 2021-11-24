const { logger } = require('../utils/logger');
const UserDAO = require('../models/DAO/user');
// const bcrypt = require('bcrypt');
// const boom = require('@hapi/boom');

module.exports = class UserService {
  async register(user) {
    try {
      const users = await new UserDAO();
      return users.create(user);
    } catch (err) {
      logger.error('[falla al guardar]', err);
    }
  }

  async getAll() {
    try {
      const users = await new UserDAO().read();

      if (users === undefined) {
        return '{error: "No hay users cargados."}';
      }
      return users;
    } catch (err) {
      logger.error(err);
    }
  }
};
/*
  async getOne(id) {
    try {
      const users = await new UserDAO().readById(id);

      if (users === undefined) {
        return new UserDAO().read();
      }
      return users;
    } catch (error) {
      logger.error(error);
    }
  }

 

  async updateUser(title, price, thumbnail, stock, id) {
    try {
      const user = new UserDAO();
      const payload = {
        title,
        price,
        thumbnail,
        stock,
        id,
        timestamp: Date.now(),
      };
      return user.update(payload);
    } catch (error) {
      logger.error(error);
    }
  }

  async destroy(id) {
    try {
      return new UserDAO().delete(id);
    } catch (err) {
      return logger.error('[]');
    }
  }

  nameFilter(name) {
    try {
      return new UserDAO().getByTitle(name);
    } catch (err) {
      logger.error(err);
    }
  }

};
*/
