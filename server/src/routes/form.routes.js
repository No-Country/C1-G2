const express = require('express');
const Router = express.Router();
const mail = require('../services/mail.service');

Router.post('/', async function (req, res) {
  try {
    const texto = `Nombre: ${req.body.name} \nMotivo: ${req.body.subject} \nEmail: ${req.body.email} \nMensaje: ${req.body.message}`;

    const info = await mail.main(texto);

    res.send(info);
  } catch (error) {
    res.send(error);
  }
});

module.exports = Router;
