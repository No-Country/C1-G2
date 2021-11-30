const express = require('express');
const Router = express.Router();
const petController = require('../controllers/pet.controller');
//Rutas
Router.post('/', petController.create);

Router.get('/list', petController.read);
Router.get('/byid/:id', petController.readById);
Router.get('/name', petController.readByName);
Router.get('/gender', petController.readByGender);
Router.get('/race', petController.readByRace);
Router.delete('/delete', petController.delete);

Router.put('/update/:id', petController.update);

module.exports = Router;
