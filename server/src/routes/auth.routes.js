const express = require('express');
const Router = express.Router();
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const authController = require('../controllers/auth.controller');

Router.post(
  '/login',
  [
    check('email', 'Email is required and must be valid email').isEmail(),
    check(
      'password',
      'Password is required and must be at least 6 characters'
    ).isLength({ min: 6 }),
    validateFields,
  ],
  authController.login
);

Router.get('/logout', authController.logoutHandler);

module.exports = Router;
