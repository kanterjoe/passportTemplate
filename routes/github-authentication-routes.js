var router = require('express').Router()

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

module.exports = function(passport) {

	//github routes
	router.get("/", function(req,res) {
		console.log("In /:",req.user);
		res.send();
	})
	router.get('/login/github', passport.authenticate('github'));



	router.get('/login/github/callback', 
		  //passport.authenticate('github', { failureRedirect: '/' }),
		  function(req, res) {

		  	console.log("In callback. User:", req.user,"query:", req.query)

		    res.redirect('/testgithubuser');
		  }
	  );



	//use this route to test the user
	router.get('/testgithubuser',
		//passport.authenticate('local'),
		//ensureLoggedIn('/'),
		function(req, res) {
				console.log("getting github user", );

		    res.json({success:(req.user? "Yes":"No"), user:req.user});
		    console.log("Done getting test user");

		}
	);

	router.get('/logout',
		

	  	function(req, res) { 
		  	const old_user=req.user;
		  	req.logout();

	    	res.json({success:(req.user? "No":"Yes"), user:req.user, "old_user":old_user});
	});

	return router;

}

