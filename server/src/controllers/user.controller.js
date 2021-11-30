const { logger } = require('../utils/logger');
const bcrypt = require('bcryptjs');
const boom = require('@hapi/boom');
const UserService = require('../services/user.service');
const User = new UserService();

exports.create = async (req, res) => {
  try {
    const { username, email, password, image, phone } = await req.body;
    const hashedPassword = bcrypt.hashSync(
      password,
      bcrypt.genSaltSync(10),
      null
    );
    const newUser = {
      username: username,
      email: email,
      password: hashedPassword,
      image: image,
      phone: phone,
      role: 'read',
    };
    const result = await User.register(newUser);
    if (result.level === 'error') {
      res.status(500).json({ message: 'User not created' });
    } else {
      res.status(200).json({ message: 'User created' });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.read = async (req, res) => {
  try {
    const users = await User.getAll();
    res.status(200).json({ users: users });
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.readById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.getById(id);
    if (user === null) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.readByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.getEmail(email);
    if (user === null) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { username, image, phone } = req.body;

    const result = await User.updateUser({
      id: id,
      username: username,
      image: image,
      phone: phone,
    });
    res.status(200).json({ data: result, message: 'User updated' });
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.destroy(id);
    if (user === undefined || user === null) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ message: 'User deleted' });
    }
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};
