var router = require('express').Router();


router.route("/hello")
    .get(  (req,res) => res.send(`Hello, ${ (req.user? req.user.username:"Anonymous user")}`) )

module.exports = router;