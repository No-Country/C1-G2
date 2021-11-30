const express = require('express');
const Router = express.Router();
const ongController = require('../controllers/ong.controller');

Router.post('/', ongController.create);
Router.get('/list', ongController.read);
Router.get('/byid/:id', ongController.readById);
Router.get('/nit', ongController.readByNit);
Router.get('/name', ongController.readByName);
Router.delete('/delete', ongController.delete);
Router.put('/update/:id', ongController.update);

module.exports = Router;
