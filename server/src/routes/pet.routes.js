const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet.controller');

router.post('/', petController.create);

router.get('/list', petController.read);
router.get('/byid/:id', petController.readById);
router.get('/name', petController.readByName);
router.get('/gender', petController.readByGender);
router.get('/race', petController.readByRace);
router.delete('/delete', petController.delete);

router.put('/update/:id', petController.update);

module.exports = router;
