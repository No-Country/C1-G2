const express = require('express');
const Router = express.Router();
const userController = require('../controllers/user.controller');
const { validateJWT } = require('../middlewares/auth.handler');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

Router.post(
  '/',
  [
    check('email', 'Email is required and must be valid email').isEmail(),
    check('password', 'Password is required and must be at least 6 characters')
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
    validateFields,
  ],
  userController.create
);
Router.get('/', userController.readByEmail);
Router.get('/list', userController.read);
Router.get('/:id', userController.readById);
Router.put('/:id', [validateJWT], userController.update);
Router.delete('/:id', [validateJWT], userController.delete);

module.exports = Router;
