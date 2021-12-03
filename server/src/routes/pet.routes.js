const express = require('express');
const Router = express.Router();
const petController = require('../controllers/pet.controller');
const { validateJWT } = require('../middlewares/auth.handler');



//Rutas
Router.post('/', [validateJWT], petController.create);



Router.get('/list',[validateJWT], petController.read);
Router.get('/byid/:id', petController.readById);
Router.get('/name', petController.readByName);
Router.get('/gender',[validateJWT] ,petController.readByGender);
Router.get('/race', petController.readByRace);
Router.delete('/delete', [validateJWT], petController.delete);

Router.put('/update/:id', [validateJWT], petController.update);

module.exports = Router;
