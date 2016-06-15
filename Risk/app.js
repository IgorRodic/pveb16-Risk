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
var game_prep = require('./routes/game_prep');
var authenticate = require('./routes/authenticate')(passport);
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/risk');       

var app = express();
var serv = require('http').Server(app);

serv.listen(3000, function(){
    console.log("Server started, listening at *:3000...");
});

var io = require('socket.io')(serv, {});
var socket_list = [];
var player_list = [];
var id = 0, id1 = 0;

var Player = function(id1, name1, goal1){
  var self = {
    id: id1,
    name: name1, 
    goal: goal1
  }

  return self;
}

io.on('connection', function(socket){
  if (id == 0)
  {
    socket.id = parseInt(Math.random() * 1000);
    id = socket.id;
  }
  else
  {
    socket.id = 1000 + parseInt(Math.random() * 1000);
    id1 = socket.id;
  }

  socket_list[socket.id] = socket;
  var player = Player(socket.id, '', '');
  player_list[socket.id] = player;

  io.emit('chat message', "User connected!", socket.id);

  socket.on('disconnect', function(){
    delete socket_list[socket.id];
    delete player_list[socket.id];
    io.emit('disconnect', "User disconnected!");
  });
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg.text, msg.user);
  });

  socket.on('set user name', function(msg){
    player_list[msg.id].name = msg.user;
    player_list[msg.id].goal = msg.goal;
    io.emit('player names', player_list);
  });

  socket.on('check game start', function(){
    io.emit('start game');
  });

  socket.on('cb1 checked', function(){
    io.emit('cb1 checked');
  });

  socket.on('cb1 unchecked', function(){
    io.emit('cb1 unchecked');
  });

  socket.on('cb2 checked', function(){
    io.emit('cb2 checked');
  });

  socket.on('cb2 unchecked', function(){
    io.emit('cb2 unchecked');
  });
});

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
app.use('/game_prep', game_prep);
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
