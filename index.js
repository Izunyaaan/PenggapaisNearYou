const express = require('express');
const app = express();

//declare port
const PORT = process.env.PORT || 5000;

//declare path
const path = require('path');

//set views folder and view engine
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

//Serve static files
app.use(express.static('public'));

//use urlencoder for parsing request body
app.use(express.urlencoded({
    extended: false
}));

//database shit
const mongoose = require('mongoose');
const db = require('./config/key.js').MongoURI;

//routes
const router = require('./routes/app.js');
app.use('/', router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));