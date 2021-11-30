const express = require('express');
const Router = express.Router();
const authController = require('../controllers/auth.controller');

Router.post('/login', authController.login);
Router.get('/logout', authController.logoutHandler);

module.exports = Router;
