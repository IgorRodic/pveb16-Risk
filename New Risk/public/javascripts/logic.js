var socket = io();
var USER_NAME;
var USER_ID;
var timeout1, timeout2, timeout3, interval1, interval2, interval3;
var player_list = [];
var player1_name, player2_name;
var tanksRemaining = 0;


$(document).ready(function(){
    $("#chatButton").click(function(){
        $("#chat").slideToggle("slow");
        $("#chatHeader").slideToggle("slow");
    });

    var audioPlayer2 = document.getElementById('audio2'); 
    timeout1 = setTimeout(function() { audioPlayer2.play(); }, 5200)

    var audioPlayer3 = document.getElementById('audio3'); 
    timeout2 = setTimeout(function() { audioPlayer3.play(); }, 7600)

    // Postavljanje imena igraca
    interval1 = setInterval(function() {
        //var goalID = Math.floor((Math.random() * 10) + 1);
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

socket.on('disconnect', function(text){
    $('#messages').append($('<li>').text(text));
    var chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    if (window.location.href == 'http://localhost:3000/#/map')
    {
        alert('Some other player disconnected. You win :)!');
        window.location.href = 'http://localhost:3000/#/';
    }
});

// Primanje poruka
socket.on('chat message', function(text, color, user){
    if (typeof user === 'undefined')
    {
        // User connected / disconnected
        $('#messages').append($('<li><span class="'+color+'">'+text+'</li>'));
        var chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight - chat.clientHeight;
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
        
    for(var i = 0; i < array.length; i++ )
        if(typeof array[i].name === 'undefined')
            return false;
    return true;
}

// Odgovor na zahtev postavljanja imena igraca
socket.on('player names', function(players){
    $('#playerList').empty();
    for(var i = 0; i < players.length; i++){
        $('#playerList').append($('<li><span class=" list-group-item '+players[i].color+'">'+ players[i].name +'</li>'))
    }
    if(undefinedNotExists(players)){
        clearInterval(interval1);
        socket.emit('check game start');
    }
});

// Lista igraca se osvezava jer je neko od igraca izasao iz igre pre njenog pocetka
// socket.on('refresh player names', function(data){
//     player_list = data;

//     document.getElementById("player1").value = '';
//     document.getElementById("player2").value = '';
//     for (var i = 0; i < 2000; i++) {
//         if (player_list[i] != undefined)
//         {
//             if (document.getElementById("player1").value == '' && document.getElementById("player2").value != player_list[i].name.trim()){
//                 document.getElementById("player1").value = player_list[i].name.trim();
//                 $('#misija').text("Your goal: " + goals[player_list[i].goal] + "! Tanks remaining: " + tanksRemaining);
//             }
//             else if (document.getElementById("player2").value == '' && document.getElementById("player1").value != player_list[i].name.trim()) {
//                 document.getElementById("player2").value = player_list[i].name.trim();
//                 $('#misija').text("Your goal: " + goals[player_list[i].goal] + "! Tanks remaining: " + tanksRemaining);
//             }
//         }
//     }
// });

// Startovanje igre
socket.on('start game', function(players, territories_array){
    if(isStarted) 
        return;
    isStarted = true;
    var step =  	Math.floor(TERITORIES_CNT / PLAYERS_CNT);
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
    timeout3 = setTimeout(function() { window.location.href = 'http://localhost:3000/#/map'; }, 100); 
    socket.emit('set tanks');    
});

var initSetIncrease = function(e){
    if(tanksRemaining <= 0) return;
    tanksRemaining--;
    // console.log(tanksRemaining);
    // console.log(USER_ID+ "  " + e.markerIndex);
    socket.emit('increase', USER_ID, e.markerIndex); 
    $('#misija').text("Conquer all!"+ " Tanks remaining: " + tanksRemaining);
    if(tanksRemaining == 0){
    	socket.emit('can begin',USER_ID);
        playersList[USER_ID].tanksMarkers.unlisten("click");
    }
};

socket.on('inital set',function(){
    $('#misija').text("Conquer all!"+ " Tanks remaining: " + tanksRemaining);
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
    if(tanksRemaining <= 0) return;
    tanksRemaining--;
    socket.emit('increase', USER_ID, e.markerIndex); 
    if(tanksRemaining == 0){
    	socket.emit('next phase',USER_ID,CURRENT_PHASE);
        playersList[USER_ID].tanksMarkers.unlisten("click");
    }
};
socket.on('place tank',function(userId){
    $('#misija').text("Conquer all!"+ " Tanks remaining: " + tanksRemaining);
    CURRENT_PHASE = 0;
    if(USER_ID != userId) return;
    document.getElementById('tekst_igre').innerHTML = USER_NAME + " placing tenks";
    tanksRemaining += 5;
    playersList[userId].tanksMarkers.listen("click",placeTank);
});


var attackSelected = [];
var canAttack = function (array) {
    console.log(array);
    var first = array[0];
    var second = array[1];

    // neighborsMap
    // teritoriesData

    var firstIndex = playersList[first.user].teritories[first.teritory];
    var secondIndex = playersList[second.user].teritories[second.teritory];

    var firstId = indexArray[firstIndex];
    var secondId = indexArray[secondIndex];

    console.log(firstId+ " "+secondId);
    var neighbor = neighborsMap[firstId];
    console.log(neighbor);
    console.log(neighbor.indexOf(secondId));
    if(neighbor.indexOf(secondId) != -1)
        return true;
    
    return false;
}
var onClickAttack = function (e) {
    var userId = this.userId;
    var teritoryId = e.markerIndex;
    
    console.log(userId + " " + teritoryId + " " + USER_ID );

    if(attackSelected.length == 0){
        if(userId != USER_ID){
            console.log("Choose your teritory!");
            return;
        }
        else if(playersList[userId].tanksTeritories < 2){
            console.log("You don't have enough tanks to attack!");
            return;
        }
        else{
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
            socket.emit("win teritory", attackSelected);
            attackSelected = [];
        }
    }
    
    
}

socket.on('attack',function(userId){
    $('#misija').text("Conquer all!"+ " Tanks remaining: " + tanksRemaining);
    CURRENT_PHASE = 1;
    document.getElementById('tekst_igre').innerHTML = playersList[userId].name + " is attacking ";
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

    playersList[second.user].removeTerotiry(second.teritory);
    playersList[second.user].setMarkers(map,teritories);
    playersList[second.user].setTanksCnt(playersList[second.user].tanksTeritories);
    playersList[second.user].tanksMarkers.userId = second.user;

  });

// Disable-ovanje dugmica prema trenutno fazi igre
//socket.on('phase', function(currentPlayer, currentPhase){


    // document.getElementById('placeTankButton').disabled = true;
    // document.getElementById('removeTankButton').disabled = true;
    // document.getElementById('attackButton').disabled = true;
    // document.getElementById('nextPhaseButton').disabled = true;

    // // Trenutni potez
    // //console.log(phase_id);

    // if (phase_id == 0) {
    //     if (player1_name == $('#user').text().trim()) {
    //         document.getElementById('placeTankButton').disabled = false;
    //         document.getElementById('removeTankButton').disabled = false;
    //         document.getElementById('nextPhaseButton').disabled = false;
    //     }

    //     document.getElementById('tekst_igre').innerHTML = "Phase: " + player1_name + " is placing tanks!";
    // }
    // else if (phase_id == 1) {
    //     if (player1_name == $('#user').text().trim()) {
    //         document.getElementById('attackButton').disabled = false;
    //         document.getElementById('nextPhaseButton').disabled = false;
    //     }

    //     document.getElementById('tekst_igre').innerHTML = "Phase: " + player1_name + " is attacking!";
    // }
    // else if (phase_id == 2) {
    //     if (player2_name == $('#user').text().trim()) {
    //         document.getElementById('placeTankButton').disabled = false;
    //         document.getElementById('removeTankButton').disabled = false;
    //         document.getElementById('nextPhaseButton').disabled = false;
    //     }

    //     document.getElementById('tekst_igre').innerHTML = "Phase: " + player2_name + " is placing tanks! ";
    // }   
    // else if (phase_id == 3) {
    //     if (player2_name == $('#user').text().trim()) {
    //         document.getElementById('attackButton').disabled = false;
    //         document.getElementById('nextPhaseButton').disabled = false;
    //     }
        
    //     document.getElementById('tekst_igre').innerHTML = "Phase: " + player2_name + " is attacking!";
    // }
//});

function nextPhase() {
    var audioPlayer3 = document.getElementById('audio3'); 
    audioPlayer3.play();

    $('#myModal').modal();
    //socket.emit('next phase');
}

// function placeTank() {
//     var audioPlayer8 = document.getElementById('audio8'); 
//     audioPlayer8.play();

//     var id = "EU.SE";
//     if (player1_name == $('#user').text().trim())
//         socket.emit('place tank', player1_name, id);
//     else if (player2_name == $('#user').text().trim())
//         socket.emit('place tank', player2_name, id);
// }

// socket.on('place tank', function(player_name, id){
//     // Provera cija je teritorija id
//     for (var j = 0; j < territories.length; j++) {
//         var territory = territories[j];
//         for (var property in territory) {
//             if (property == 'player' && territory[property] == player_name && tanksRemaining > 0)
//             {
//                 territory['tanks']++;

//                 // Smanjenje broja raspolozivih tenkova
//                 tanksRemaining--;
//                 var str = $('#misija').text();
//                 var num = str.match(/\d+/)[0];
//                 str = str.replace(num, tanksRemaining);
//                 $('#misija').text(str);
//                 console.log(territory['tanks']);
//             }
//             else if (property == 'id' && territory[property] == id)
//                 continue;
//             else
//                 break;
//         }
//     }
// });

// function removeTank() {
//     var audioPlayer8 = document.getElementById('audio8'); 
//     audioPlayer8.play();

//     var id = "EU.SE";
//     if (player1_name == $('#user').text().trim())
//         socket.emit('remove tank', player1_name, id);
//     else if (player2_name == $('#user').text().trim())
//         socket.emit('remove tank', player2_name, id);
// }

// socket.on('remove tank', function(player_name, id){
//     // Provera cija je teritorija id
//     for (var j = 0; j < territories.length; j++) {
//         var territory = territories[j];
//         for (var property in territory) {
//             if (property == 'player' && territory[property] == player_name && territory['tanks'] > 0)
//             {
//                 territory['tanks']--;

//                 // Povecanje broja raspolozivih tenkova
//                 tanksRemaining++;
//                 var str = $('#misija').text();
//                 var num = str.match(/\d+/)[0];
//                 str = str.replace(num, tanksRemaining);
//                 $('#misija').text(str);
//                 console.log(territory['tanks']);
//             }
//             else if (property == 'id' && territory[property] == id)
//                 continue;
//             else
//                 break;
//         }
//     }
// });

// function attack() {
//     var audioPlayer6 = document.getElementById('audio6'); 
//     audioPlayer6.play();

//     var id1 = "EU.SE";
//     var id2 = "AS.ME";
//     // var id1 = "EU.SE";
//     // var id2 = "EU.GB";
//     if (player1_name == $('#user').text().trim())
//         socket.emit('attack', player1_name, id1, id2);
//     else if (player2_name == $('#user').text().trim())
//         socket.emit('attack', player2_name, id1, id2);
// }

// // id1 napada id2
// socket.on('attack', function(player_name, id1, id2){
//     var num_tanks1, num_tanks2;

//     // Provera cije su teritorije id1 i id2
//     for (var j = 0; j < territories.length; j++) {
//         var territory = territories[j];
//         for (var property in territory) {
//             if (property == 'player' && territory[property] == player_name)
//             {
//                 territory['tanks'] = num_tanks1;
//                 for (var k = 0; k < territories.length; k++) {
//                     var territory = territories[k];
//                     for (var property in territory) {
//                         if (property == 'player' && territory[property] != player_name)
//                         {
//                             territory['tanks'] = num_tanks2;
//                             // Provera da li teritorija id1 moze da napada teritoriju id2
//                             for (var m = 0; m < can_attack.length; m++) {
//                                 var attack = can_attack[m];
//                                 for (var property in attack) {
//                                     if (property == 'id2' && attack[property] == id2)
//                                     {
//                                         // Napad
//                                         console.log("Attack");

//                                         //if (num_tanks1 > num_tanks2)

//                                         // Pobeda
//                                         // var audioPlayer7 = document.getElementById('audio7'); 
//                                         // audioPlayer7.play();
//                                     }
//                                     else if (property == 'id1' && attack[property] == id1)
//                                         continue;
//                                     else
//                                         break;
//                                 }
//                             }
//                         }
//                         else if (property == 'id' && territory[property] == id2)
//                             continue;
//                         else
//                             break; 
//                     }
//                 }
//             }
//             else if (property == 'id' && territory[property] == id1)
//                 continue;
//             else
//                 break;
//         }
//     }
// });
