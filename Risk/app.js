var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

require('./models/models');
var index = require('./routes/index');
var map = require('./routes/map');
var authenticate = require('./routes/authenticate')(passport);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/risk');       
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Staviti favicon u /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(session({
  secret: 'velika tajna'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/auth', authenticate);
app.use('/map', map);

// Hvatanje greske 404
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Inicijalizacija passport-a
var initPassport = require('./passport-init');
initPassport(passport);

// Development error handler
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// Production error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;