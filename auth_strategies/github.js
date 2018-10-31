let Strategy = require('passport-github').Strategy;

let User          = require('../models/user');
 




//A strategy is the way we are authenticating.
//This file sets up the github strategy. 
//github uses oath2 to authenticate, so most other 3rd party auths (facebook, google, etc) will be similar


console.log("GitHub app Client ID: ",process.env.CLIENT_ID); //test that we got our env setup right
const strategy = new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/login/github/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Github profile is supplied as the user
    // record.  In a production-quality application, the Github profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.

    console.log("Successfully logged in: ", profile);
    
    User.findOrCreate({
      where :{
        github_id: profile.id
      }, 
      defaults: {username: profile.username}
    })
    .then(DBuser => cb (null, DBuser))

    .catch()

    //return cb(null, profile);
  });

module.exports = strategy;




