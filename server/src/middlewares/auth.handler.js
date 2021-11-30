const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/schemas/user.model');
const { logger } = require('../utils/logger');
const boom = require('@hapi/boom');

const validateJWT = async (req, res, next) => {
  const token = req.header('x-auth');

  if (!token) return res.status(401).json({ msg: 'Token is missing' });

  try {
    const { uid } = jsonwebtoken.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(uid);

    // verificar que el usuario existe
    if (!user) return res.status(401).json({ msg: 'Invalid Token' });

    req.user = user;

    next();
  } catch (error) {
    logger.error(error);
    return res
      .status(boom.badData(error).output.statusCode)
      .json({ message: boom.badData(error).output.payload.message });
  }
};

module.exports = { validateJWT };
