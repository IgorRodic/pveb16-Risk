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

// Deklaracije promenljivih
const PHASE_CNT = 4;
const TERITORIES_CNT = 42;
const PLAYERS_CNT = 2;
var clientCnt = 0;
var playersColor = ["blue", "red", "green", "yellow", "violet","orange"];
var playersList = [];
var socketList = [];
var canBegin = Array(PLAYERS_CNT).fill(false);

var randomInt = function(x){
  return Math.floor(Math.random() * x);
}

// Procesuiranje korisnickih poruka
io.on('connection', function(socket){
  var id = clientCnt;
  var player = {};

  socket.on('set user name', function(msg){
    // Provera da li je igrac vec u igri
    for (var i = 0; i < playersList.length; i++)
      if (playersList[i] != undefined && playersList[i].name == msg.user)
        return;

    // Ako ima vise od maksimalnog broja igraca izlazimo
    id = clientCnt;
    if(id >= PLAYERS_CNT) return;
    clientCnt++;

    //console.log(clientCnt);

    player.id = id;
    player.color = playersColor[id];
    player.name = msg.user;
    playersList[id] = player;

    var socket_tmp = {};
    socket_tmp.id = socket.id;
    socket_tmp.player = id;
    socketList[id] = socket_tmp;

    io.emit('player names', playersList);
  });

  socket.on('disconnect', function(){
    for (var i = 0; i < clientCnt; i++) {
      //console.log("Test: " + socketList[i].id + " " + socket.id + " " + socketList[i].player);
      if (socketList[i].id == socket.id) {
        socket_id = socketList[i].id;
        player_id = socketList[i].player;
        break;
      }
    }

    if (socketList[socket_id] != undefined)
      delete socketList[socket_id];
    if (playersList[player_id] != undefined){
      delete playersList[player_id];
      clientCnt--;
    }
    //console.log(clientCnt);
    //io.emit('disconnect', "User disconnected!");
  });

  socket.on('custom disconnect', function(user){
    for (var i = 0; i < clientCnt; i++) {
      //console.log("Test: " + socketList[i].id + " " + socket.id + " " + socketList[i].player);
      if (socketList[i].id == socket.id) {
        socket_id = socketList[i].id;
        player_id = socketList[i].player;
        break;
      }
    }

    if (socketList[socket_id] != undefined)
      delete socketList[socket_id];
    if (playersList[player_id] != undefined){
      delete playersList[player_id];
      clientCnt--;
    }
    //console.log(clientCnt);
    //io.emit('disconnect', "User disconnected!");
  });
  
  socket.on('chat message', function(msg){
    io.emit('chat message', msg.text, player.color, msg.user);
  }); 

  socket.on('check game start', function(){
    // inicijalizacija teritorija
    var teritories_shuffle = [];
    for(var i = 0; i < TERITORIES_CNT; i++) 
      teritories_shuffle[i] = i;
    
    //podela teritorija
    for(var i = 0; i < TERITORIES_CNT; i++){
      var randIndex = randomInt(TERITORIES_CNT - i -1);
      var tmp = teritories_shuffle[randIndex];
      teritories_shuffle[randIndex] = teritories_shuffle[TERITORIES_CNT - i -1];
      teritories_shuffle[TERITORIES_CNT - i -1] = tmp;
    }
      
    io.emit('start game', playersList, teritories_shuffle);
  });

  socket.on('set tanks', function(){ 
    io.emit('inital set');
  });

  socket.on('increase', function(userId,index){
    io.emit('increase tanks',userId,index);
  })

  socket.on('can begin',function(userId){
      if(!canBegin[userId])
        canBegin[userId] = true;
      var cb = true;
      for(var i = 0 ;i < PLAYERS_CNT ; i++)
        if(!canBegin[i])
          cb = false;
      if(cb)
        io.emit('attack', 0, 2);
  });

  socket.on('next phase', function(prevPlayer, prevPhase){
    var nextPhase = prevPhase + 1;
    var nextPalayer = prevPlayer; 
    if(nextPhase == PHASE_CNT){
      nextPhase = 0;
      nextPalayer++;
      if(nextPalayer == PLAYERS_CNT)
        nextPalayer = 0;
    }

    //console.log(nextPalayer+ " " + nextPhase);

    switch (nextPhase) {
      case 0: io.emit('replace tank', nextPalayer, nextPhase); break;
      case 1: io.emit('place tank', nextPalayer, nextPhase); break;
      case 2: io.emit('attack', nextPalayer, nextPhase); break;
      case 3: io.emit('replace tank', nextPalayer, nextPhase); break;
    }
  });

  socket.on("win teritory", function(array){
      io.emit("win teritory", array);
  });

  socket.on("win game", function(user){
      io.emit("win game", user);
  });

  socket.on('reset tanks', function(obj, tanksCnt){
      io.emit('reset tanks', obj, tanksCnt);
  });

  socket.on('move tanks', function (userId, move_from, move_to, cnt) {
      io.emit('move tanks', userId, move_from, move_to, cnt);
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
