'use strict'
require('dotenv').config()

var express = require ("express");
var bodyParser = require('body-parser');

//*Todays Checkpoint (timers and APIs):* https://www.switchboard.tech/checkpoint/4f7a914c43814e74d267d646c2a40a78

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cookie-parser')()); //
app.use(require('morgan')('combined'));


//Setup Passport
const passport = require('./passport-init')(app);

//Do more stuff here

var PORT = 3000;



app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});



