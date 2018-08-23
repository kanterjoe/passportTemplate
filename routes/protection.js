const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

const PROTECTED = ensureLoggedIn('/forbidden');

/*
Use this somewhere to protect an entire router. In our case, we put it in server.js



app.get('/forbidden', (req,res) => {
    res.send(403, 'You are not authorized')
});

const PROTECTED = require('./routes/protection');

const testRoutes = require('./routes/protected-routes');
const pubRoutes = require('./routes/public-routes');

testRoutes.use(PROTECTED)
//Notice not using PROTECTED on public routes

app.use(testRoutes);
app.use(pubRoutes);

*/

module.exports = PROTECTED;