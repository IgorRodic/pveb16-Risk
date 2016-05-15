var express = require('express');
var router = express.Router();

function isAuthenticated (req, res, next) {

	// Omogucavanje get zahteva svim korisnicima
	//if(req.method === "GET")
	//	return next();

	if (req.isAuthenticated())
		return next();

	// Ako korisnik nije autentifikovan redirektuje se na login stranu
	return res.redirect('/#/login');
};

router.use('/game', isAuthenticated);

/*router.route('/game')
	.get(function(req, res){

	});*/

module.exports = router;