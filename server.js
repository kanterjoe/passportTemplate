'use strict'
require('dotenv').config()

var express = require ("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('cookie-parser')()); //
app.use(require('morgan')('combined'));


//Setup Passport
const passport = require('./passport-init')(app);

//Do more stuff here

const PORT = 3000;


//the forbidden route. This is where all protected routes will be directed when auth fails 
app.get('/forbidden', (req,res) => {
    res.send(403, 'You are not authorized')
});

// Setup Routes
const protectedRoutes   = require('./routes/protected-routes');
const pubRoutes         = require('./routes/public-routes');

app.use(pubRoutes);
//make sure protectedRoutes is app.use'd after the public routes.
app.use(protectedRoutes);

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});



