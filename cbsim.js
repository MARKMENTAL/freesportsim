const teams = ["Kansas", "Boston College", "Oklahoma", "Duke", "Florida State", "Ohio State","Gonzaga","Michigan","Oregon","West Virginia", "UMass", "California", "Stanford", "Harvard","Holy Cross",
	"Kentucky"];
const positions = ["PG", "SG", "SF", "PF", "C"];

// generates up to not including 16 (count array elements starting at 1 instead of 0 to find limit)
var teampick = Math.floor(Math.random() * 16);
var tm0 = document.getElementsByClassName("team0");
var tm1 = document.getElementsByClassName("team1");
tm0[0].innerHTML = teams[teampick];
tm1[0].innerHTML = teams[Math.floor(Math.random() * 16)];
var score0 = Math.floor(Math.random() * 100) +35;
var score1 = Math.floor(Math.random() * 100) +35;
var sc0 = document.getElementsByClassName("score0");
sc0[0].innerHTML = score0;
var sc1 = document.getElementsByClassName("score1");
sc1[0].innerHTML = score1;

// if team 0 wins trigger this
if(score0 > score1){
	var wrapup = document.getElementById("wrapup");
	wrapup.innerHTML+=tm0[0].innerHTML + " defeated " + tm1[0].innerHTML + " in a ";
    // if its a blowout trigger this block
	if (score0 - score1 > 15){
    	wrapup.innerHTML+="blowout!<br>";
        wrapup.innerHTML+=tm0[0].innerHTML + " put on an exceptional offensive showing to get the victory.<br><br>";
        wrapup.innerHTML+= "Player of the game: " +tm0[0].innerHTML;
        wrapup.innerHTML+= " " + positions[Math.floor(Math.random() * 5)];
        wrapup.innerHTML+= " #" +Math.floor(Math.random() * 99);
        var mvpnts = Math.floor((Math.random() * 20)+ 10);
        wrapup.innerHTML+="<br>Points: " +mvpnts  +"<br>";
        
        if (mvpnts > 19){
		wrapup.innerHTML+="<br><br>This player's offensive drive of " +mvpnts + " points led " + tm0[0].innerHTML +" to victory<br>";
	}
    }
    // if its a close game trigger this block
    else if (score0 - score1 <= 15){
    	wrapup.innerHTML+="close game!<br>";
        wrapup.innerHTML+=tm0[0].innerHTML + " came away with a close victory.<br>";
        wrapup.innerHTML+= tm1[0].innerHTML + " put up a good fight but comes away with a loss<br><br>";
        wrapup.innerHTML+= "Player of the game: " +tm0[0].innerHTML;
        wrapup.innerHTML+= " " + positions[Math.floor(Math.random() * 5)];
        wrapup.innerHTML+= " #" +Math.floor(Math.random() * 99);
        var mvpnts = Math.floor((Math.random() * 20)+ 10);
        wrapup.innerHTML+="<br>Points: " +mvpnts  +"<br>";
        
        if (mvpnts > 19){
		wrapup.innerHTML+="<br><br>This player's offensive drive of " +mvpnts + " points led " + tm0[0].innerHTML +" to victory<br>";
	}
    }
	wrapup.innerHTML+=tm0[0].innerHTML +" triumphs over  "+tm1[0].innerHTML +" " + score0 + " to " +score1;
}

// if team 1 wins trigger this
else if (score1 > score0){
	var wrapup = document.getElementById("wrapup");
	wrapup.innerHTML+=tm1[0].innerHTML + " defeated " + tm0[0].innerHTML + " in a ";
    // if its a blowout trigger this block
	if (score1 - score0 > 15){
    	wrapup.innerHTML+="blowout!<br>";
        wrapup.innerHTML+=tm1[0].innerHTML + " put on an exceptional offensive showing to get the victory.<br><br>";
        wrapup.innerHTML+= "Player of the game: " +tm1[0].innerHTML;
        wrapup.innerHTML+= " " + positions[Math.floor(Math.random() * 5)];
        wrapup.innerHTML+= " #" +Math.floor(Math.random() * 99);
        var mvpnts = Math.floor((Math.random() * 20)+ 10);
        wrapup.innerHTML+="<br>Points: " +mvpnts  +"<br>";
        
        if (mvpnts > 19){
			wrapup.innerHTML+="<br><br>This player's offensive drive of " +mvpnts + " points led " + tm1[0].innerHTML +" to victory<br>";
	}
    }
    // if its a close game trigger this block
    else if (score1 - score0 <= 15){
    	wrapup.innerHTML+="close game!<br>";
        wrapup.innerHTML+=tm1[0].innerHTML + " came away with a close victory.<br>";
        wrapup.innerHTML+= tm0[0].innerHTML + " put up a good fight but comes away with a loss<br><br>";
        wrapup.innerHTML+= "Player of the game: " +tm1[0].innerHTML;
        wrapup.innerHTML+= " " +positions[Math.floor(Math.random() * 5)];
        wrapup.innerHTML+= " #" +Math.floor(Math.random() * 99); 
        var mvpnts = Math.floor((Math.random() * 20)+ 10);
        wrapup.innerHTML+="<br>Points: " +mvpnts  +"<br>";
        
        if (mvpnts > 19){
			wrapup.innerHTML+="<br><br>This player's offensive drive of " +mvpnts + " points led " + tm1[0].innerHTML +" to victory<br>";
		}
    }
	wrapup.innerHTML+=tm1[0].innerHTML +" triumphs over  "+tm0[0].innerHTML +" " + score1 + " to " +score0;
}
// if its a tie trigger this block
else{
	var wrapup = document.getElementById("wrapup");
	wrapup.innerHTML+="Game was a tie";
}

wrapup.innerHTML+= "<br><br>We at the sports network hope you enjoyed tonight's College B-Ball!";
