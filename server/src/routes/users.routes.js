const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/users', userController.create);
router.get('/users', userController.read);
router.get('/users/:id', userController.readById);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

module.exports = router;
