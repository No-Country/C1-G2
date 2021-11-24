const { logger } = require('../utils/logger');
const bcrypt = require('bcrypt');
//const boom = require('@hapi/boom');
const UserService = require('../services/user');

exports.create = async (req, res) => {
  try {
    const User = new UserService();
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
    await User.register(newUser);
    return res.status(201).json({ message: 'User created' });
  } catch (error) {
    logger.error(error);
    return res.status(406).send(error);
  }
};

exports.read = async (req, res) => {
  try {
    const User = new UserService();
    const users = await User.getAll();
    return res.status(200).json({ users });
  } catch (error) {
    logger.error(error);
    return res.status(500).send(error);
  }
};
/*
exports.login = async (req, res, next) => {
  try {
    const { email, password } = await req.body;
    let user = await User.findOne({
      where: { email: email },
    });

    const pass = user.dataValues.password;
    const validUser = user.dataValues.email;
    if (!user) {
      return next(boom.unauthorized());
    }
    if (user.dataValues.email == email && bcrypt.compare(password, pass)) {
      req.session.user = validUser;
      res.status(202).json({ message: 'User logged in' });
    } else {
      return next(boom.unauthorized());
    }
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.errors);
  }
};



exports.logout = (req, res) => {
  req.session.destroy();
  res.status(200).json({ message: 'User logged out' });
};

// Update a User by the id in the request
exports.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { email, password } = req.body;
    const result = await User.update(
      {
        email: email,
        password: password,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ data: result, message: 'User updated' });
  } catch (error) {
    next(error);
  }
};

//// Delete a User with the specified id in the request
exports.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await User.destroy({
      where: {
        id: id,
      },
    });
    res.status(202).json({ data: result, message: 'User deleted' });
  } catch (error) {
    next(error);
  }
};
*/
