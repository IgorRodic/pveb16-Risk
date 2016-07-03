var socket = io();
var USER_NAME;
var USER_ID;
var timeout1, timeout2, timeout3, interval1, interval2;

var tanksRemaining = 0;

$(document).ready(function(){
    document.getElementById('chatButton').style = "display: none";

    $("#chatButton").click(function(){
        $("#chatButton").fadeOut(1500);
        $("#chat").slideToggle(1500);
        $("#chatHeader").slideToggle("fast");
        $("#form").slideToggle(1200);
    });

    $('[data-toggle="tooltip"]').tooltip(); 
    
    $("#chatSlideDown").click(function(){
        $("#chatButton").fadeIn(1500);
        $("#chat").slideToggle(1500);
        $("#chatHeader").slideToggle(100);
        $("#form").slideToggle(1200);
    });

    $("#signedInAs").click(function(){
        $("#signedInAsList").slideToggle("slow");
    });

    $("#gameInfo").click(function(){
        $("#gameInfoList").slideToggle("slow");
    });

    var audioPlayer2 = document.getElementById('audio2'); 
    timeout1 = setTimeout(function() { audioPlayer2.play(); }, 5200)

    var audioPlayer3 = document.getElementById('audio3'); 
    timeout2 = setTimeout(function() { audioPlayer3.play(); }, 7600)

    // Postavljanje imena igraca
    interval1 = setInterval(function() {
        if (window.location.href == 'http://localhost:3000/#/game_prep')
        {
            USER_NAME = $('#user').text();
            socket.emit('set user name', {
                user: USER_NAME,
            });
        }
    }, 100);
});

function playSound() {
    var audioPlayer1 = document.getElementById('audio1');
    audioPlayer1.play();

    var audioPlayer2 = document.getElementById('audio2'); 
    timeout1 = setTimeout(function() { audioPlayer2.play(); }, 5200)

    var audioPlayer3 = document.getElementById('audio3'); 
    timeout2 = setTimeout(function() { audioPlayer3.play(); }, 7600)
}

function stopSound() {
    var audioPlayer1 = document.getElementById('audio1');
    audioPlayer1.pause();
    audioPlayer1.currentTime = 0;

    var audioPlayer2 = document.getElementById('audio2'); 
    clearTimeout(timeout1);

    var audioPlayer3 = document.getElementById('audio3'); 
    clearTimeout(timeout2);
}

// Slanje poruka
function submit(){
    socket.emit('chat message', {
        user: $('#user').text(),
        text: $('#msg').val()
    });
    $('#msg').val('');
    return false;
}

// socket.on('disconnect', function(text) {
//     // User disconnected
//     $('#messages').append($('<li>').text(text));
//     var chat = document.getElementById('chat');
//     chat.scrollTop = chat.scrollHeight - chat.clientHeight;
//     if (window.location.href == 'http://localhost:3000/#/map')
//     {
//         alert('A player disconnected. You win :)!');
//         window.location.href = 'http://localhost:3000/#/';
//     }
// });

// Primanje poruka
socket.on('chat message', function(text, color, user){
    if (typeof user === 'undefined')
    {
        // User connected
        // $('#messages').append($('<li><span class="'+color+'">'+text+'</li>'));
        // var chat = document.getElementById('chat');
        // chat.scrollTop = chat.scrollHeight - chat.clientHeight;
        id = user;
    }
    else
    {
        $('#messages').append($('<li><span class="'+color+'">' + user.trim() + ': </span>' + text + '</li>'));
        var chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    }
});

var undefinedNotExists = function (array){
    if(array.length != PLAYERS_CNT){
        return false;
    }
        
    for(var i = 0; i < array.length; i++)
        if(typeof array[i].name === 'undefined')
            return false;
    return true;
}

// Odgovor na zahtev postavljanja imena igraca
socket.on('player names', function(players){
    $('#playerList').empty();
    for(var i = 0; i < players.length; i++){
        if (players[i].name != undefined) {
            $('#playerList').append($('<li><span style="margin: 30px;" class="list-group-item '+ players[i].color +'">'+ players[i].name +'</li>'))
            if (players[i].name == USER_NAME)
                document.getElementById('signedInAs').style = "color: " + players[i].color + "";
        }
    }
    if(undefinedNotExists(players)){
        clearInterval(interval1);
        socket.emit('check game start');
    }
});

// Startovanje igre
socket.on('start game', function(players, territories_array){
    if(isStarted) 
        return;

    isStarted = true;
    var step = Math.floor(TERITORIES_CNT / PLAYERS_CNT);
    for(var j = 0 ; j < PLAYERS_CNT; j++){
     	playersList[j] = new Player(players[j].name,players[j].color);
        playersList[j].setTeritories(territories_array.slice( j*step ,(j+1) * step));
    }
    
    if(PLAYERS_CNT == 4 || PLAYERS_CNT == 5){
        playersList[0].teritories.push(territories_array[40]);
        playersList[1].teritories.push(territories_array[41]);
    }

    for(var j = 0 ; j < PLAYERS_CNT; j++){
        playersList[j].setMarkers(map,teritories);
        playersList[j].setTanksCnt(playersList[j].tanksTeritories);
        // dodajemo korisnika 
        playersList[j].tanksMarkers.userId = j;
    }

    map.draw();
    timeout3 = setTimeout(function() { window.location.href = 'http://localhost:3000/#/map'; }, 13500); 

    // Odbrojavanje do pocetka igre
    var i = 10;
    interval2 = setInterval(function() { 
        document.getElementById('gamePrepInfo').innerHTML = i;
        var audioPlayer4 = document.getElementById('audio4');
        audioPlayer4.play();
        if (i <= 0)
        {
            clearInterval(interval2);
            document.getElementById('gamePrepInfo').innerHTML = "The game will begin shortly, have fun!";
        }
        i--;
    }, 1000);

    socket.emit('set tanks');    
});

var initSetIncrease = function(e){
    var audioPlayer8 = document.getElementById('audio8');
    audioPlayer8.play();

    if(tanksRemaining <= 0) return;
        tanksRemaining--;

    // console.log(tanksRemaining);
    // console.log(USER_ID+ "  " + e.markerIndex);
    socket.emit('increase', USER_ID, e.markerIndex); 
    $('#misija').text("Conquer all!");
    $('#tenkovi').text("Tanks remaining: " + tanksRemaining);
    if(tanksRemaining == 0){
    	socket.emit('can begin',USER_ID);
        playersList[USER_ID].tanksMarkers.unlisten("click");
    }
};

socket.on('inital set',function(){
    $('#misija').text("Conquer all!");
    $('#tenkovi').text("Tanks remaining: " + tanksRemaining);
    if(isInitialized)
        return;
        
    isInitialized = true;
    tanksRemaining = tanksCnt[PLAYERS_CNT.toString()];
    
    for(var i = 0 ; i < PLAYERS_CNT; i++){
        if(playersList[i].name == USER_NAME){
            USER_ID = i;
            playersList[i].tanksMarkers.listen("click",initSetIncrease);
        }
    }
});

socket.on('increase tanks',function(userId,index){
    //povecavanje broja tenkova
    playersList[userId].tanksTeritories[index]++;
    //ispisivanje 
    playersList[userId].setTanksCnt(playersList[userId].tanksTeritories)
});

var placeTank = function(e){
    var audioPlayer8 = document.getElementById('audio8');
    audioPlayer8.play();

    if(tanksRemaining <= 0) return;
    tanksRemaining--;
    socket.emit('increase', USER_ID, e.markerIndex); 
    if(tanksRemaining == 0){
    	socket.emit('next phase',USER_ID,CURRENT_PHASE);
        playersList[USER_ID].tanksMarkers.unlisten("click");
    }
};

socket.on('place tank',function(userId){
    $('#misija').text("Conquer all!");
    $('#tenkovi').text("Tanks remaining: " + tanksRemaining);
    CURRENT_PHASE = 0;
    if(USER_ID != userId) return;
    document.getElementById('tekst_igre').innerHTML = USER_NAME + " is placing tanks!";
    tanksRemaining += 5;
    playersList[userId].tanksMarkers.listen("click",placeTank);
});

var attackSelected = [];
var canAttack = function (array) {
    console.log(array);
    var first = array[0];
    var second = array[1];

    var firstIndex = playersList[first.user].teritories[first.teritory];
    var secondIndex = playersList[second.user].teritories[second.teritory];

    var firstId = indexArray[firstIndex];
    var secondId = indexArray[secondIndex];

    var neighbor = neighborsMap[firstId];
    if(neighbor.indexOf(secondId) != -1)
        return true;
    
    return false;
}

var randomFromOneToSix = function(){
    return Math.floor(Math.random() * 6) + 1;
}

var attackTanksCnt = function(tanksCnt){
    switch (tanksCnt) {
        case 2: return 1;
        case 3: return 2;
        default: return 3;
    }
}

var defenceTanksCnt = function(tanksCnt){
    switch (tanksCnt) {
        case 1: return 1;
        case 2: return 2;
        default: return 3;
    }
}

function simulateAttack(attacker, defender)
{
    var audioPlayer6 = document.getElementById('audio6');
    audioPlayer6.play();

    var attackerCnt = playersList[attacker.user].tanksTeritories[attacker.teritory];
    var defenderCnt = playersList[defender.user].tanksTeritories[defender.teritory];

    var attack = Array(attackTanksCnt(attackerCnt));
    var defence = Array(defenceTanksCnt(defenderCnt));

    for(let i = 0 ; i < attack.length ; i++)
        attack[i] = randomFromOneToSix();

    for(let i = 0 ; i < defence.length ; i++)
        defence[i] = randomFromOneToSix();

    attack.sort(function(a,b) {return b - a});
    defence.sort(function(a,b) {return b - a});

    var win = false;
    for(let i = 0; i < attack.length && i < defence.length; i++){
        //console.log(i+ " " + attackerCnt+  " " + defenderCnt );
        if(attack[i] > defence[i]){
            if(--defenderCnt == 0){
                var audioPlayer7 = document.getElementById('audio7');
                audioPlayer7.play();
                win = true;
                break;
            }
        }
        else
            attackerCnt--;
    }

    socket.emit('reset tanks',attacker,attackerCnt);
    if(win)
        socket.emit("win teritory", attackSelected);
    else
        socket.emit('reset tanks',defender,defenderCnt);
}

var onModalClick = function(){
    //jquery ne moze da uhvati preko $("#tanksNumberInput")
    var cnt = parseInt(document.getElementById("tanksNumberInput").value);
    var max = parseInt(document.getElementById("tanksNumberInput").max);

    if(cnt > max )
        return false;

    socket.emit("move tanks", USER_ID, MOVE_FROM, MOVE_TO, cnt);
    $('#myModal').modal("hide");
};

var onClickAttack = function (e) {
    var userId = this.userId;
    var teritoryId = e.markerIndex;

    console.log(userId + " " + teritoryId + " " + USER_ID);

    if(attackSelected.length == 0){
        if(userId != USER_ID){
            console.log("Choose your teritory!");
            return;
        }
        else if(playersList[userId].tanksTeritories[teritoryId] < 2){
            console.log("You don't have enough tanks to attack!");
            return;
        }
        else {
            attackSelected[0] = { "user" : userId, "teritory" : teritoryId};
        }

    }
    else if(attackSelected.length == 1){
        if(userId == USER_ID){
            console.log("Choose opponent's teritory!");
            attackSelected = [];
            return;
        }
        attackSelected[1] = { "user" : userId, "teritory" : teritoryId };
        if(!canAttack(attackSelected)){
            console.log("Cannot atack this teritory!");
            attackSelected = [];
        }
        else {
            simulateAttack(attackSelected[0], attackSelected[1])
            attackSelected = [];
        }
    }
}

socket.on('reset tanks', function(obj, tanksCnt){
    var userId = obj.user;
    var teritoryId = obj.teritory;
    playersList[userId].tanksTeritories[teritoryId] = tanksCnt;
    playersList[userId].setTanksCnt(playersList[userId].tanksTeritories);
});

socket.on('attack',function(userId){
    $('#misija').text("Conquer all!");
    $('#tenkovi').text("Tanks remaining: " + tanksRemaining);
    CURRENT_PHASE = 1;
    document.getElementById('tekst_igre').innerHTML = playersList[userId].name + " is attacking!";
    if(USER_ID != userId) return;
    for(var i = 0 ;i < PLAYERS_CNT ; i++)
        playersList[i].tanksMarkers.listen("click",onClickAttack);
});


socket.on("win teritory",function(array){
    var first= array[0];
    var second = array[1];

    var firstIndex = playersList[first.user].teritories[first.teritory];
    var secondIndex = playersList[second.user].teritories[second.teritory];

    playersList[first.user].addTeritory(secondIndex);
    playersList[first.user].setMarkers(map,teritories);
    playersList[first.user].tanksTeritories[first.teritory]--;
    playersList[first.user].setTanksCnt(playersList[first.user].tanksTeritories);
    playersList[first.user].tanksMarkers.userId = first.user;
    playersList[first.user].tanksMarkers.listen("click",onClickAttack);

    playersList[second.user].removeTerotiry(second.teritory);
    playersList[second.user].setMarkers(map,teritories);
    playersList[second.user].setTanksCnt(playersList[second.user].tanksTeritories);
    playersList[second.user].tanksMarkers.userId = second.user;
    playersList[second.user].tanksMarkers.listen("click",onClickAttack);

    //pomeranje tenkova
    if(first.user == USER_ID){
        // postavljanje ogranicenja, mora ostati bar jedan tenk
        var max = playersList[first.user].tanksTeritories[first.teritory] - 1;
        $("#tanksNumberInput").attr("max",max);

        //postavljanje teritorija za pomeranje tenkova, sa one sa koje smo napadali
        // na osvojenu (poslednju dodatu u listu teritorija)
        MOVE_FROM = first.teritory;
        MOVE_TO = playersList[USER_ID].tanksTeritories.length - 1;

        $("#myModal").modal();
    }

});

socket.on('move tanks',function (userId, move_from, move_to, cnt) {
    console.log([userId, move_from, move_to, cnt]);
    playersList[userId].tanksTeritories[move_from] -= cnt;
    playersList[userId].tanksTeritories[move_to] += cnt;

    // console.log(playersList[userId].tanksTeritories[move_from]);
    // console.log(playersList[userId].tanksTeritories[move_to]);

    playersList[userId].setTanksCnt(playersList[userId].tanksTeritories);
});

function nextPhase() {
    var audioPlayer3 = document.getElementById('audio3'); 
    audioPlayer3.play();

    // $('#myModal').modal();
    // socket.emit('next phase');
}
