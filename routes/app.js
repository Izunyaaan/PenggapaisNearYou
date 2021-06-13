const express = require('express');
const router = express.Router();

// GET - render the home/index page

router.get('/', (req, res) => {
    res.render('index');
});

// GET - render the login page by clicking the login button in homepage
router.get('/login', (req, res) => {
    res.render('login');
});

// GET - render registration page after Penggapai clicks on "Register Here" from login page
router.get('/registration', (req, res) => {
    res.render('registration');
});

// GET - render validation page after registration success
router.get('/validation', (req, res) => {
    res.render('validation');
});

router.post('/search', (req, res) => {

    res.render('searchResults');
});


module.exports = router;