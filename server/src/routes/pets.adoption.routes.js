const express = require("express");
const router = express.Router();




router.get('/adoption', (req, res) => {
    res.send("mascota en adopcion");
});




module.exports = router;