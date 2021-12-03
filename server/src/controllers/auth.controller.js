const generateJWT = require('../helpers/generateJWT');
const logout = require('express-passport-logout');
const logger = require('../utils/logger');
const UserService = require('../services/user.service');
const User = new UserService();

exports.login = async (req, res) => {
  try {
    const { email, password } = await req.body;
    const user = await User.checkLogin(email, password);
    const token = await generateJWT(user.id);

    res.status(200).json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).send(error.errors);
  }
};

exports.logoutHandler = (req, res) => {
  logout();
  res.status(200).json({
    status: 'logout',
    msg: 'Please Log In again',
  });
};
