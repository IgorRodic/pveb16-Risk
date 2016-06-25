var socket = io();
var timeout1, timeout2, timeout3, interval1, interval2, interval3;
var player_list = [];
var player1_name, player2_name;
var tanks_remaining = 5;

// Zadaci igraca
goals = [
    "Conquer the Americas", 
    "Conquer Africa and Asia", 
    "Conquer Africa and North America", 
    "Conquer North America and Europe",
    "Conquer North America and Asia",
    "Conquer South America and Europe",
    "Conquer South America and Asia",
    "Conquer Asia and Europe",
    "Conquer Asia and Australia",
    "Conquer Europe and Australia"
];

// Niz teritorija, igraca koji ih poseduju, i broja tenkova na njima
var territories = [
    {"id": "AU.WA", "player": '', "tanks": 2},
    {"id": "AU.EA", "player": '', "tanks": 2},
    {"id": "AF.MA", "player": '', "tanks": 2},
    {"id": "AF.EG", "player": '', "tanks": 2},
    {"id": "AF.EA", "player": '', "tanks": 2},
    {"id": "AF.SA", "player": '', "tanks": 2},
    {"id": "AF.CO", "player": '', "tanks": 2},
    {"id": "AF.NA", "player": '', "tanks": 2},
    {"id": "AS.UR", "player": '', "tanks": 2},
    {"id": "AS.SI", "player": '', "tanks": 2},
    {"id": "AS.YA", "player": '', "tanks": 2},
    {"id": "AS.KA", "player": '', "tanks": 2},
    {"id": "AS.IR", "player": '', "tanks": 2},
    {"id": "AS.CH", "player": '', "tanks": 2},
    {"id": "AS.MO", "player": '', "tanks": 2},
    {"id": "AS.SA", "player": '', "tanks": 2},
    {"id": "AS.AF", "player": '', "tanks": 2},
    {"id": "AS.IN", "player": '', "tanks": 2},
    {"id": "AS.ME", "player": '', "tanks": 2},
    {"id": "EU.GB", "player": '', "tanks": 2},
    {"id": "EU.IC", "player": '', "tanks": 2},
    {"id": "EU.SC", "player": '', "tanks": 2},
    {"id": "EU.WE", "player": '', "tanks": 2},
    {"id": "EU.SE", "player": '', "tanks": 2},
    {"id": "EU.RU", "player": '', "tanks": 2},
    {"id": "EU.CE", "player": '', "tanks": 2},
    {"id": "AS.JA", "player": '', "tanks": 2},
    {"id": "AU.NG", "player": '', "tanks": 2},
    {"id": "NA.QU", "player": '', "tanks": 2},
    {"id": "NA.ON", "player": '', "tanks": 2},
    {"id": "NA.CA", "player": '', "tanks": 2},
    {"id": "NA.WUS", "player": '', "tanks": 2},
    {"id": "NA.EUS", "player": '', "tanks": 2},
    {"id": "NA.ALB", "player": '', "tanks": 2},
    {"id": "NA.GR", "player": '', "tanks": 2},
    {"id": "NA.ALA", "player": '', "tanks": 2},
    {"id": "NA.NT", "player": '', "tanks": 2},
    {"id": "AU.IN", "player": '', "tanks": 2},
    {"id": "SA.AR", "player": '', "tanks": 2},
    {"id": "SA.BR", "player": '', "tanks": 2},
    {"id": "SA.PE", "player": '', "tanks": 2},
    {"id": "SA.VE", "player": '', "tanks": 2}
];

// Teritorije id1 mogu da napadaju teritorije id2
var can_attack = [
    {"id1": "AU.WA", "id2": "AU.EA"},
    {"id1": "AU.WA", "id2": "AU.IN"},
    {"id1": "AU.WA", "id2": "AU.NG"},

    {"id1": "AU.EA", "id2": "AU.WA"},
    {"id1": "AU.EA", "id2": "AU.IN"},
    {"id1": "AU.EA", "id2": "AU.NG"},

    {"id1": "AU.NG", "id2": "AU.WA"},
    {"id1": "AU.NG", "id2": "AU.EA"},
    {"id1": "AU.NG", "id2": "AU.IN"},

    {"id1": "AU.IN", "id2": "AU.WA"},
    {"id1": "AU.IN", "id2": "AU.NG"},
    {"id1": "AU.IN", "id2": "AS.SA"},

    {"id1": "AS.SA", "id2": "AU.IN"},
    {"id1": "AS.SA", "id2": "AS.IN"},
    {"id1": "AS.SA", "id2": "AS.CH"},

    {"id1": "AS.CH", "id2": "AS.SA"},
    {"id1": "AS.CH", "id2": "AS.IN"},
    {"id1": "AS.CH", "id2": "AS.AF"},
    {"id1": "AS.CH", "id2": "AS.UR"},
    {"id1": "AS.CH", "id2": "AS.SI"},
    {"id1": "AS.CH", "id2": "AS.MO"},

    {"id1": "AS.IN", "id2": "AS.SA"},
    {"id1": "AS.IN", "id2": "AS.ME"},
    {"id1": "AS.IN", "id2": "AS.AF"},
    {"id1": "AS.IN", "id2": "AS.CH"},

    {"id1": "AS.MO", "id2": "AS.CH"},
    {"id1": "AS.MO", "id2": "AS.SI"},
    {"id1": "AS.MO", "id2": "AS.IR"},
    {"id1": "AS.MO", "id2": "AS.KA"},
    {"id1": "AS.MO", "id2": "AS.JA"},

    {"id1": "AS.SI", "id2": "AS.UR"},
    {"id1": "AS.SI", "id2": "AS.CH"},
    {"id1": "AS.SI", "id2": "AS.MO"},
    {"id1": "AS.SI", "id2": "AS.IR"},
    {"id1": "AS.SI", "id2": "AS.YA"},

    {"id1": "AS.IR", "id2": "AS.SI"},
    {"id1": "AS.IR", "id2": "AS.MO"},
    {"id1": "AS.IR", "id2": "AS.YA"},
    {"id1": "AS.IR", "id2": "AS.KA"},

    {"id1": "AS.YA", "id2": "AS.SI"},
    {"id1": "AS.YA", "id2": "AS.IR"},
    {"id1": "AS.YA", "id2": "AS.KA"},

    {"id1": "AS.KA", "id2": "AS.YA"},
    {"id1": "AS.KA", "id2": "AS.IR"},
    {"id1": "AS.KA", "id2": "AS.MO"},
    {"id1": "AS.KA", "id2": "AS.JA"},
    {"id1": "AS.KA", "id2": "NA.ALA"},

    {"id1": "AS.JA", "id2": "AS.KA"},
    {"id1": "AS.JA", "id2": "AS.MO"},

    {"id1": "AS.UR", "id2": "AS.SI"},
    {"id1": "AS.UR", "id2": "AS.CH"},
    {"id1": "AS.UR", "id2": "AS.AF"},
    {"id1": "AS.UR", "id2": "EU.RU"},

    {"id1": "AS.AF", "id2": "AS.UR"},
    {"id1": "AS.AF", "id2": "AS.CH"},
    {"id1": "AS.AF", "id2": "AS.IN"},
    {"id1": "AS.AF", "id2": "AS.ME"},
    {"id1": "AS.AF", "id2": "EU.RU"},

    {"id1": "AS.ME", "id2": "AS.IN"},
    {"id1": "AS.ME", "id2": "AS.AF"},
    {"id1": "AS.ME", "id2": "EU.RU"},
    {"id1": "AS.ME", "id2": "EU.SE"},
    {"id1": "AS.ME", "id2": "AF.EG"},
    {"id1": "AS.ME", "id2": "AF.EA"},

    {"id1": "AF.MA", "id2": "AF.EA"},
    {"id1": "AF.MA", "id2": "AF.SA"},

    {"id1": "AF.SA", "id2": "AF.MA"},
    {"id1": "AF.SA", "id2": "AF.EA"},
    {"id1": "AF.SA", "id2": "AF.CO"},

    {"id1": "AF.CO", "id2": "AF.SA"},
    {"id1": "AF.CO", "id2": "AF.EA"},
    {"id1": "AF.CO", "id2": "AF.NA"},

    {"id1": "AF.EA", "id2": "AF.MA"},
    {"id1": "AF.EA", "id2": "AF.SA"},
    {"id1": "AF.EA", "id2": "AF.CO"},
    {"id1": "AF.EA", "id2": "AF.NA"},
    {"id1": "AF.EA", "id2": "AF.EG"},
    {"id1": "AF.EA", "id2": "AS.ME"},

    {"id1": "AF.NA", "id2": "SA.BR"},
    {"id1": "AF.NA", "id2": "AF.CO"},
    {"id1": "AF.NA", "id2": "AF.EA"},
    {"id1": "AF.NA", "id2": "AF.EG"},
    {"id1": "AF.NA", "id2": "EU.SE"},
    {"id1": "AF.NA", "id2": "EU.WE"},

    {"id1": "AF.EG", "id2": "AF.NA"},
    {"id1": "AF.EG", "id2": "AF.EA"},
    {"id1": "AF.EG", "id2": "AS.ME"},
    {"id1": "AF.EG", "id2": "EU.SE"},

    {"id1": "EU.RU", "id2": "AS.UR"},
    {"id1": "EU.RU", "id2": "AS.AF"},
    {"id1": "EU.RU", "id2": "AS.ME"},
    {"id1": "EU.RU", "id2": "EU.SE"},
    {"id1": "EU.RU", "id2": "EU.CE"},
    {"id1": "EU.RU", "id2": "EU.SC"},

    {"id1": "EU.SC", "id2": "EU.RU"},
    {"id1": "EU.SC", "id2": "EU.CE"},
    {"id1": "EU.SC", "id2": "EU.GB"},
    {"id1": "EU.SC", "id2": "EU.IC"},

    {"id1": "EU.SE", "id2": "AS.ME"},
    {"id1": "EU.SE", "id2": "AF.EG"},
    {"id1": "EU.SE", "id2": "AF.NA"},
    {"id1": "EU.SE", "id2": "EU.WE"},
    {"id1": "EU.SE", "id2": "EU.CE"},
    {"id1": "EU.SE", "id2": "EU.RU"},

    {"id1": "EU.CE", "id2": "EU.RU"},
    {"id1": "EU.CE", "id2": "EU.SC"},
    {"id1": "EU.CE", "id2": "EU.GB"},
    {"id1": "EU.CE", "id2": "EU.WE"},
    {"id1": "EU.CE", "id2": "EU.SE"},

    {"id1": "EU.WE", "id2": "AF.NA"},
    {"id1": "EU.WE", "id2": "EU.SE"},
    {"id1": "EU.WE", "id2": "EU.CE"},
    {"id1": "EU.WE", "id2": "EU.GB"},

    {"id1": "EU.GB", "id2": "EU.WE"},
    {"id1": "EU.GB", "id2": "EU.CE"},
    {"id1": "EU.GB", "id2": "EU.SC"},
    {"id1": "EU.GB", "id2": "WU.IC"},

    {"id1": "EU.IC", "id2": "EU.GB"},
    {"id1": "EU.IC", "id2": "EU.SC"},
    {"id1": "EU.IC", "id2": "NA.GR"},

    {"id1": "NA.GR", "id2": "EU.IC"},
    {"id1": "NA.GR", "id2": "NA.QU"},
    {"id1": "NA.GR", "id2": "NA.ON"},
    {"id1": "NA.GR", "id2": "NA.NT"},

    {"id1": "NA.NT", "id2": "NA.GR"},
    {"id1": "NA.NT", "id2": "NA.ALA"},
    {"id1": "NA.NT", "id2": "NA.ALB"},
    {"id1": "NA.NT", "id2": "NA.ON"},

    {"id1": "NA.ALA", "id2": "AS.KA"},
    {"id1": "NA.ALA", "id2": "NA.NT"},
    {"id1": "NA.ALA", "id2": "NA.ALB"},

    {"id1": "NA.ALB", "id2": "NA.ALA"},
    {"id1": "NA.ALB", "id2": "NA.NT"},
    {"id1": "NA.ALB", "id2": "NA.ON"},
    {"id1": "NA.ALB", "id2": "NA.WUS"},

    {"id1": "NA.ON", "id2": "NA.NT"},
    {"id1": "NA.ON", "id2": "NA.ALB"},
    {"id1": "NA.ON", "id2": "NA.WUS"},
    {"id1": "NA.ON", "id2": "NA.EUS"},
    {"id1": "NA.ON", "id2": "NA.QU"},
    {"id1": "NA.ON", "id2": "NA.GR"},

    {"id1": "NA.QU", "id2": "NA.ON"},
    {"id1": "NA.QU", "id2": "NA.EUS"},
    {"id1": "NA.QU", "id2": "NA.GR"},

    {"id1": "NA.WUS", "id2": "NA.ALB"},
    {"id1": "NA.WUS", "id2": "NA.ON"},
    {"id1": "NA.WUS", "id2": "NA.EUS"},
    {"id1": "NA.WUS", "id2": "NA.CA"},

    {"id1": "NA.EUS", "id2": "NA.QU"},
    {"id1": "NA.EUS", "id2": "NA.ON"},
    {"id1": "NA.EUS", "id2": "NA.WUS"},
    {"id1": "NA.EUS", "id2": "NA.CA"},

    {"id1": "NA.CA", "id2": "NA.WUS"},
    {"id1": "NA.CA", "id2": "NA.EUS"},
    {"id1": "NA.CA", "id2": "SA.VE"},

    {"id1": "SA.VE", "id2": "NA.CA"},
    {"id1": "SA.VE", "id2": "SA.PE"},
    {"id1": "SA.VE", "id2": "SA.BR"},

    {"id1": "SA.PE", "id2": "SA.VE"},
    {"id1": "SA.PE", "id2": "SA.BR"},
    {"id1": "SA.PE", "id2": "SA.AR"},

    {"id1": "SA.BR", "id2": "AF.NA"},
    {"id1": "SA.BR", "id2": "SA.VE"},
    {"id1": "SA.BR", "id2": "SA.PE"},
    {"id1": "SA.BR", "id2": "SA.AR"},

    {"id1": "SA.AR", "id2": "SA.PE"},
    {"id1": "SA.AR", "id2": "SA.BR"}
];

$(document).ready(function(){
    $("#chatButton").click(function(){
        $("#chat").slideToggle("slow");
        $("#chatHeader").slideToggle("slow");
    });

    var audioPlayer2 = document.getElementById('audio2'); 
    timeout1 = setTimeout(function() { audioPlayer2.play(); }, 5200)

    var audioPlayer3 = document.getElementById('audio3'); 
    timeout2 = setTimeout(function() { audioPlayer3.play(); }, 7600)

    // Postavljanje imena i zadatka igraca
    interval1 = setInterval(function() {
        var goalID = Math.floor((Math.random() * 10) + 1);
        if (window.location.href == 'http://localhost:3000/#/game_prep')
        {
            socket.emit('set user name', {
                user: $('#user').text(),
                id: id,
                goal: goalID
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
        alert('The other player disconnected. You win!');
        window.location.href = 'http://localhost:3000/#/';
    }
});

// Primanje poruka
socket.on('chat message', function(text, user){
    if (typeof user === 'number')
    {
        // User connected / disconnected
        $('#messages').append($('<li>').text(text));
        var chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight - chat.clientHeight;
        id = user;
    }
    else
    {
        if (user.trim() == player1_name || player1_name == undefined)
            $('#messages').append($("<li><span class=\"blue\">" + user.trim() + ": </span>" + text + "</li>"));
        else if (user.trim() == player2_name || player2_name == undefined)
            $('#messages').append($("<li><span class=\"green\">" + user.trim() + ": </span>" + text + "</li>"));
        var chat = document.getElementById('chat');
        chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    }
});

// Odgovor na zahtev postavljanja imena igraca
socket.on('player names', function(data){
    player_list = data;

    // Kada dodjemo do prvog igraca (onog koji nije undefined), stavljamo ga na prvo mesto, drugog na drugo
    for (var i = 0; i < 2000; i++) {
        if (player_list[i] != undefined)
        {
            if (document.getElementById("player1").value == '' && document.getElementById("player2").value != player_list[i].name.trim())
            {
                document.getElementById("player1").value = player_list[i].name.trim();
                $('#misija').text("Your goal: " + goals[player_list[i].goal] + "! Tanks remaining: " + tanks_remaining);
            }
            else if (document.getElementById("player2").value == '' && document.getElementById("player1").value != player_list[i].name.trim())
            {
                document.getElementById("player2").value = player_list[i].name.trim();
                $('#misija').text("Your goal: " + goals[player_list[i].goal] + "! Tanks remaining: " + tanks_remaining);
            }
            else
                clearInterval(interval1);
        }
    }

    // Provera koji checkbox za start igre pripada kom igracu
    if (document.getElementById("player1").value != '' && document.getElementById("player2").value != '') 
    {
        player1_name = document.getElementById("player1").value;
        player2_name = document.getElementById("player2").value;
        if (document.getElementById("player1").value.trim() == $('#user').text().trim()) {
            document.getElementById('cb1').disabled = false;
            document.getElementById('cb2').disabled = true;
        }
        else {
            document.getElementById('cb1').disabled = true;
            document.getElementById('cb2').disabled = false;
        }
    }
    else {
        document.getElementById('cb1').disabled = true;
        document.getElementById('cb2').disabled = true;
    }
});

// Lista igraca se osvezava jer je neko od igraca izasao iz igre pre njenog pocetka
socket.on('refresh player names', function(data){
    player_list = data;

    document.getElementById("player1").value = '';
    document.getElementById("player2").value = '';
    for (var i = 0; i < 2000; i++) {
        if (player_list[i] != undefined)
        {
            if (document.getElementById("player1").value == '' && document.getElementById("player2").value != player_list[i].name.trim()){
                document.getElementById("player1").value = player_list[i].name.trim();
                $('#misija').text("Your goal: " + goals[player_list[i].goal] + "! Tanks remaining: " + tanks_remaining);
            }
            else if (document.getElementById("player2").value == '' && document.getElementById("player1").value != player_list[i].name.trim()) {
                document.getElementById("player2").value = player_list[i].name.trim();
                $('#misija').text("Your goal: " + goals[player_list[i].goal] + "! Tanks remaining: " + tanks_remaining);
            }
        }
    }
});

// Sinhronizacija checkbox-ova za potvrdu pocetka igre
function checkBox1() {
    if (document.getElementById('cb1').checked)
        socket.emit('cb1 checked');
    else
        socket.emit('cb1 unchecked');
}

socket.on('cb1 checked', function(){
    document.getElementById('cb1').checked = true;
});

socket.on('cb1 unchecked', function(){
    document.getElementById('cb1').checked = false;
});

function checkBox2() {
    if (document.getElementById('cb2').checked)
        socket.emit('cb2 checked');
    else
        socket.emit('cb2 unchecked');
}

socket.on('cb2 checked', function(){
    document.getElementById('cb2').checked = true;
});

socket.on('cb2 unchecked', function(){
    document.getElementById('cb2').checked = false;
});

function checkGameStart() {
    socket.emit('check game start');
}

// Startovanje igre
socket.on('start game', function(){
    if (document.getElementById('cb1').checked && document.getElementById('cb2').checked)
    {
        var i = 10;
        document.getElementById('startButton').disabled = true;
        timeout3 = setTimeout(function() { window.location.href = 'http://localhost:3000/#/map'; }, 13500);

        // Odbrojavanje do pocetka igre
        interval2 = setInterval(function() { 
            document.getElementById('gamePrepInfo').innerHTML = i;
            var audioPlayer4 = document.getElementById('audio4');
            audioPlayer4.play();
            if (i <= 0)
            {
                clearInterval(interval2);
                document.getElementById('gamePrepInfo').innerHTML = "The game will begin shortly, have fun!";

                // Podela teritorija
                var t1 = 0, t2 = 0;
                for (var j = 0; j < territories.length; j++) {
                    var territory = territories[j];
                    for (var property in territory) {
                        if (property == 'player')
                        {
                            var random_player = Math.floor(Math.random() * 2) + 1;
                            if (t1 == 21)
                                territory[property] = player2_name;
                            else if (t2 == 21)
                                territory[property] = player1_name;
                            else if (random_player == 1)
                            {
                                t1++;
                                territory[property] = player1_name;
                            }
                            else if (random_player == 2)
                            {
                                t2++;
                                territory[property] = player2_name;
                            }
                        }
                        //console.log('item ' + j + ': ' + property + '=' + territory[property]);
                    }
                }

                // FARBANJE TERITORIJA PO IGRACIMA

                // Inicijalni minut za preraspodelu tenkova
                //i = 62;
                i = 12;
                interval3 = setInterval(function() { 
                    document.getElementById('tekst_igre').innerHTML = "You have one minute to reposition your tanks! " + i;
                    if (i <= 0)
                    {
                        clearInterval(interval3);
                        if (player1_name == $('#user').text().trim())
                            socket.emit('begin game');
                    }
                    i--;
                }, 1000);
            }
            i--; 
        }, 1000);
    }
    else
        document.getElementById('gamePrepInfo').innerHTML = "All players are not ready!";
});

// Disable-ovanje dugmica prema trenutno fazi igre
socket.on('phase', function(phase_id){
    document.getElementById('placeTankButton').disabled = true;
    document.getElementById('removeTankButton').disabled = true;
    document.getElementById('attackButton').disabled = true;
    document.getElementById('nextPhaseButton').disabled = true;

    // Trenutni potez
    //console.log(phase_id);

    if (phase_id == 0) {
        if (player1_name == $('#user').text().trim()) {
            document.getElementById('placeTankButton').disabled = false;
            document.getElementById('removeTankButton').disabled = false;
            document.getElementById('nextPhaseButton').disabled = false;
        }

        document.getElementById('tekst_igre').innerHTML = "Phase: " + player1_name + " is placing tanks!";
    }
    else if (phase_id == 1) {
        if (player1_name == $('#user').text().trim()) {
            document.getElementById('attackButton').disabled = false;
            document.getElementById('nextPhaseButton').disabled = false;
        }

        document.getElementById('tekst_igre').innerHTML = "Phase: " + player1_name + " is attacking!";
    }
    else if (phase_id == 2) {
        if (player2_name == $('#user').text().trim()) {
            document.getElementById('placeTankButton').disabled = false;
            document.getElementById('removeTankButton').disabled = false;
            document.getElementById('nextPhaseButton').disabled = false;
        }

        document.getElementById('tekst_igre').innerHTML = "Phase: " + player2_name + " is placing tanks! ";
    }   
    else if (phase_id == 3) {
        if (player2_name == $('#user').text().trim()) {
            document.getElementById('attackButton').disabled = false;
            document.getElementById('nextPhaseButton').disabled = false;
        }
        
        document.getElementById('tekst_igre').innerHTML = "Phase: " + player2_name + " is attacking!";
    }
});

function nextPhase() {
    var audioPlayer3 = document.getElementById('audio3'); 
    audioPlayer3.play();

    socket.emit('next phase');
}

function placeTank() {
    var audioPlayer8 = document.getElementById('audio8'); 
    audioPlayer8.play();

    var id = "EU.SE";
    if (player1_name == $('#user').text().trim())
        socket.emit('place tank', player1_name, id);
    else if (player2_name == $('#user').text().trim())
        socket.emit('place tank', player2_name, id);
}

socket.on('place tank', function(player_name, id){
    // Provera cija je teritorija id
    for (var j = 0; j < territories.length; j++) {
        var territory = territories[j];
        for (var property in territory) {
            if (property == 'player' && territory[property] == player_name && tanks_remaining > 0)
            {
                territory['tanks']++;

                // Smanjenje broja raspolozivih tenkova
                tanks_remaining--;
                var str = $('#misija').text();
                var num = str.match(/\d+/)[0];
                str = str.replace(num, tanks_remaining);
                $('#misija').text(str);
                console.log(territory['tanks']);
            }
            else if (property == 'id' && territory[property] == id)
                continue;
            else
                break;
        }
    }
});

function removeTank() {
    var audioPlayer8 = document.getElementById('audio8'); 
    audioPlayer8.play();

    var id = "EU.SE";
    if (player1_name == $('#user').text().trim())
        socket.emit('remove tank', player1_name, id);
    else if (player2_name == $('#user').text().trim())
        socket.emit('remove tank', player2_name, id);
}

socket.on('remove tank', function(player_name, id){
    // Provera cija je teritorija id
    for (var j = 0; j < territories.length; j++) {
        var territory = territories[j];
        for (var property in territory) {
            if (property == 'player' && territory[property] == player_name && territory['tanks'] > 0)
            {
                territory['tanks']--;

                // Povecanje broja raspolozivih tenkova
                tanks_remaining++;
                var str = $('#misija').text();
                var num = str.match(/\d+/)[0];
                str = str.replace(num, tanks_remaining);
                $('#misija').text(str);
                console.log(territory['tanks']);
            }
            else if (property == 'id' && territory[property] == id)
                continue;
            else
                break;
        }
    }
});

function attack() {
    var audioPlayer6 = document.getElementById('audio6'); 
    audioPlayer6.play();

    var id1 = "EU.SE";
    var id2 = "AS.ME";
    // var id1 = "EU.SE";
    // var id2 = "EU.GB";
    if (player1_name == $('#user').text().trim())
        socket.emit('attack', player1_name, id1, id2);
    else if (player2_name == $('#user').text().trim())
        socket.emit('attack', player2_name, id1, id2);
}

// id1 napada id2
socket.on('attack', function(player_name, id1, id2){
    var num_tanks1, num_tanks2;

    // Provera cije su teritorije id1 i id2
    for (var j = 0; j < territories.length; j++) {
        var territory = territories[j];
        for (var property in territory) {
            if (property == 'player' && territory[property] == player_name)
            {
                territory['tanks'] = num_tanks1;
                for (var k = 0; k < territories.length; k++) {
                    var territory = territories[k];
                    for (var property in territory) {
                        if (property == 'player' && territory[property] != player_name)
                        {
                            territory['tanks'] = num_tanks2;
                            // Provera da li teritorija id1 moze da napada teritoriju id2
                            for (var m = 0; m < can_attack.length; m++) {
                                var attack = can_attack[m];
                                for (var property in attack) {
                                    if (property == 'id2' && attack[property] == id2)
                                    {
                                        // Napad
                                        console.log("Attack");

                                        //if (num_tanks1 > num_tanks2)

                                        // Pobeda
                                        // var audioPlayer7 = document.getElementById('audio7'); 
                                        // audioPlayer7.play();
                                    }
                                    else if (property == 'id1' && attack[property] == id1)
                                        continue;
                                    else
                                        break;
                                }
                            }
                        }
                        else if (property == 'id' && territory[property] == id2)
                            continue;
                        else
                            break; 
                    }
                }
            }
            else if (property == 'id' && territory[property] == id1)
                continue;
            else
                break;
        }
    }
});
