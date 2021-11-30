const express = require('express');
const router = express.Router();
const ongController = require('../controllers/ong.controller');

router.post('/' ,ongController.create);
router.get('/list', ongController.read);
router.get('/byid/:id', ongController.readById);
router.get('/nit', ongController.readByNit);
router.get('/name', ongController.readByName);
router.delete('/delete', ongController.delete);
router.put('/update/:id',ongController.update);

module.exports = router;





