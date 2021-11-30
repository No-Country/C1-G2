const express = require('express');
const Router = express.Router();
const userController = require('../controllers/user.controller');

Router.post('/', userController.create);
Router.get('/', userController.readByEmail);
Router.get('/list', userController.read);
Router.get('/:id', userController.readById);
Router.put('/:id', userController.update);
Router.delete('/:id', userController.delete);

module.exports = Router;
