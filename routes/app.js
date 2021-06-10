const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/search', (req, res) => {
    res.render('searchResults');
});


module.exports = router;