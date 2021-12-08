const express = require('express');
const Router = express.Router();
const nodemailer = require('nodemailer');

Router.post('/', (req, res) => {
    

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "cuentaapppresupuesto@gmail.com", // generated ethereal user
          pass:  "Pass2513", // generated ethereal password
        },
        tls : {
            rejectUnathorized: false, 
        }
      });
      const mailOptions = {
          from: '<noreply>remitente<noreply>',
          to:"alacran.mlr@gmail.com",
          subject:"", 
          html:"",  
      }

      transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message);
        }else {
            console.log("Email enviado")
            res.status(200).json(req.body);
        }
      });
      console.log("Formulario enviado");
});
    


module.exports = Router;