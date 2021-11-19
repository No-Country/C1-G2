const express = require("express");
const router = express.Router();




router.get('/users', (req, res) => {
    res.send("listado de usuarios");
});




module.exports = router;