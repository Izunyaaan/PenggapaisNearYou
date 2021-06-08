const express = require('express');
const router = express.Router();

router('/', (req, res) => {
    res.render('index');
});


module.exports = router;