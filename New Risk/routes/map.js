var express = require('express');
var router = express.Router();

router.route('/map')
	.get(function(req, res, next){
		if (user.loggedin === undefined && req.url != '/#/login')
			return res.redirect('/#/login');
	});

module.exports = router;