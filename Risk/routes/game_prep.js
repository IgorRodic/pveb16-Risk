var express = require('express');
var router = express.Router();

function isAuthenticated (req, res, next) {
	if (req.isAuthenticated())
		return next();

	// Ako korisnik nije autentifikovan redirektuje se na login stranu
	return res.redirect('/login');
};

router.use('/game_prep', isAuthenticated);

module.exports = router;