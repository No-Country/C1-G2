const nodemailer = require('nodemailer');

async function main(texto) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.CORREO_SERVICE,
      port: process.env.CORREO_PORT,
      secure: false,
      auth: {
        user: process.env.CORREO_USER,
        pass: process.env.CORREO_PASSWORD,
      },
      tls: {
        rejectUnathorized: false,
      },
    });

    const info = await transporter.sendMail({
      to: process.env.CORREO_DEST,
      text: texto,
    });

    return info.messageId;
  } catch (error) {
    console.log(error);
  }
}

main().catch(console.error());

module.exports = { main };
