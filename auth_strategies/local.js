let Strategy = require('passport-local').Strategy;
let User = require ('../models/user')


//A strategy is the way we are authenticating. A local stategy is one that doesn't user 3rd party auth.
//This is the simplest strategy. We are storing the username and password in plaintext in the db (I know, I know. super insecure. It's just an example, don't judge)
//To authenticate:
// 1. check if the user is in the database 
// 2. check if the password matches
const strategy = new Strategy(
  //{  session: true },
  //Passport will give us the username and password and the "done" function. 
  function(username, password, done) {

    //our user is in Sequelize,
    User.findOne({ 
        where:{ username: username }
    }).then(
      function (DBuser) {
            console.log("Back from the database! Let's check if our credentials are good: ");

            if (!DBuser) {
              console.log("User " + username + " was not in the DB");
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!DBuser.validPassword(password)) {
            // if (!(DBuser.password===password)) {
              console.log("Password " + password + " does not match the password in the DB: " + DBuser.password ); //For the love of all that is good and secure, never console log user passwords in a production app

              return done(null, false, { message: 'Incorrect password.' });
            }
            // if the user exists, and the passwords match, we have a successful Authentication! 
            // return the user object. This will get saved in req.user
            console.log("They are!");
            return done(null, DBuser);
          }

    );
  }
);


module.exports = strategy;