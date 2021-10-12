const teams = ['Cincinnati Bearcats', 'East Carolina Pirates', 'Houston Cougars', 'Memphis Tigers', 'Navy Midshipmen', 'SMU Mustangs', 'South Florida Bulls', 'Temple Owls', 'Tulane Green Wave', 'Tulsa Golden Hurricane', 'UCF Knights', 'Boston College Eagles', 'Clemson Tigers', 'Duke Blue Devils', 'Florida State Seminoles', 'Georgia Tech Yellow Jackets', 'Louisville Cardinals', 'Miami Hurricanes', 'NC State Wolfpack', 'North Carolina Tar Heels', 'Pittsburgh Panthers', 'Syracuse Orange', 'Virginia Cavaliers', 'Virginia Tech Hokies', 'Wake Forest Demon Deacons', 'Baylor Bears', 'Iowa State Cyclones', 'Kansas Jayhawks', 'Kansas State Wildcats', 'Oklahoma Sooners', 'Oklahoma State Cowboys', 'TCU Horned Frogs', 'Texas Longhorns', 'Texas Tech Red Raiders', 'West Virginia Mountaineers', 'Illinois Fighting Illini', 'Indiana Hoosiers', 'Iowa Hawkeyes', 'Maryland Terrapins', 'Michigan State Spartans', 'Michigan Wolverines', 'Minnesota Golden Gophers', 'Nebraska Cornhuskers', 'Northwestern Wildcats', 'Ohio State Buckeyes', 'Penn State Nittany Lions', 'Purdue Boilermakers', 'Rutgers Scarlet Knights', 'Wisconsin Badgers', 'Charlotte 49ers', 'Florida Atlantic Owls', 'Florida International Panthers', 'Louisiana Tech Bulldogs', 'Marshall Thundering Herd', 'Middle Tennessee Blue Raiders', 'North Texas Mean Green', 'Old Dominion Monarchs', 'Rice Owls', 'Southern Miss Golden Eagles', 'UAB Blazers', 'UTEP Miners', 'UTSA Roadrunners', 'Western Kentucky Hilltoppers', 'Army Black Knights', 'BYU Cougars', 'Liberty Flames', 'New Mexico State Aggies', 'Notre Dame Fighting Irish', 'UConn Huskies', 'UMass Minutemen', 'Akron Zips', 'Ball State Cardinals', 'Bowling Green Falcons', 'Buffalo Bulls', 'Central Michigan Chippewas', 'Eastern Michigan Eagles', 'Kent State Golden Flashes', 'Miami (OH) RedHawks', 'Northern Illinois Huskies', 'Ohio Bobcats', 'Toledo Rockets', 'Western Michigan Broncos', 'Air Force Falcons', 'Boise State Broncos', 'Colorado State Rams', 'Fresno State Bulldogs', "Hawai'i Rainbow Warriors", 'Nevada Wolf Pack', 'New Mexico Lobos', 'San Diego State Aztecs', 'San José State Spartans', 'UNLV Rebels', 'Utah State Aggies', 'Wyoming Cowboys', 'Arizona State Sun Devils', 'Arizona Wildcats', 'California Golden Bears', 'Colorado Buffaloes', 'Oregon Ducks', 'Oregon State Beavers', 'Stanford Cardinal', 'UCLA Bruins', 'USC Trojans', 'Utah Utes', 'Washington Huskies', 'Washington State Cougars', 'Alabama Crimson Tide', 'Arkansas Razorbacks', 'Auburn Tigers', 'Florida Gators', 'Georgia Bulldogs', 'Kentucky Wildcats', 'LSU Tigers', 'Mississippi State Bulldogs', 'Missouri Tigers', 'Ole Miss Rebels', 'South Carolina Gamecocks', 'Tennessee Volunteers', 'Texas A&M Aggies', 'Vanderbilt Commodores', 'Appalachian State Mountaineers', 'Arkansas State Red Wolves', 'Coastal Carolina Chanticleers', 'Georgia Southern Eagles', 'Georgia State Panthers', "Louisiana Ragin' Cajuns", 'South Alabama Jaguars', 'Texas State Bobcats', 'Troy Trojans', 'UL Monroe Warhawks'];
const positions = ["QB", "HB", "WR", "TE"];
var tds = 0;
var mvpyds = Math.floor(Math.random() * 300);

// generates up to not including 130 (count array elements starting at 1 instead of 0 to find limit)
var teampick = Math.floor(Math.random() * 130);
var tm0 = document.getElementsByClassName("team0");
var tm1 = document.getElementsByClassName("team1");
tm0[0].innerHTML = teams[teampick];
tm1[0].innerHTML = teams[Math.floor(Math.random() * 130)];
var score0 = Math.floor(Math.random() * 60);
var score1 = Math.floor(Math.random() * 60);
var sc0 = document.getElementsByClassName("score0");
sc0[0].innerHTML = score0;
var sc1 = document.getElementsByClassName("score1");
sc1[0].innerHTML = score1;

// if team 0 wins trigger this
if(score0 > score1){
	var wrapup = document.getElementById("wrapup");
	wrapup.innerHTML+=tm0[0].innerHTML + " defeated " + tm1[0].innerHTML + " in a ";
    // if its a blowout trigger this block
	if (score0 - score1 > 14){
    	wrapup.innerHTML+="blowout!<br>";
        wrapup.innerHTML+=tm0[0].innerHTML + " put on an exceptional offensive showing to get the victory.<br><br>";
        wrapup.innerHTML+= "Player of the game: " +tm0[0].innerHTML;
        wrapup.innerHTML+= " " + positions[Math.floor(Math.random() * 4)];
        wrapup.innerHTML+= " #" +Math.floor(Math.random() * 99);
        wrapup.innerHTML+="<br>Total yards gained or thrown for: " +mvpyds  +"<br>";
		if (mvpyds >= 200 || score0 >=14){
            tds = Math.floor((Math.random() * 3) + 1);       
		}
		else if(mvpyds >= 100 || score0 >=7){
			tds = Math.floor(Math.random() * 1);
		}
	wrapup.innerHTML+= "Touchdowns scored: " +tds + "<br>";      
    }
    // if its a close game trigger this block
    else if (score0 - score1 <= 15){
    	wrapup.innerHTML+="close game!<br>";
        wrapup.innerHTML+=tm0[0].innerHTML + " came away with a close victory.<br>";
        wrapup.innerHTML+= tm1[0].innerHTML + " put up a good fight but comes away with a loss<br><br>";
        wrapup.innerHTML+= "Player of the game: " +tm0[0].innerHTML;
        wrapup.innerHTML+= " " + positions[Math.floor(Math.random() * 4)];
        wrapup.innerHTML+= " #" +Math.floor(Math.random() * 99);
        wrapup.innerHTML+="<br>Total yards gained or thrown for: " +mvpyds  +"<br>";
		if (mvpyds >= 200 || score0 >=14){
            tds = Math.floor((Math.random() * 3) + 1);       
		}
		else if(mvpyds >= 100 || score0 >=7){
			tds = 1;
		}
        wrapup.innerHTML+= "Touchdowns scored: " +tds + "<br>";
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
        wrapup.innerHTML+= " " + positions[Math.floor(Math.random() * 4)];
        wrapup.innerHTML+= " #" +Math.floor(Math.random() * 99);
        wrapup.innerHTML+="<br>Total yards gained or thrown for: " +mvpyds  +"<br>";
		if (mvpyds >= 200 || score1 >=14){
            tds = Math.floor((Math.random() * 3) + 1);       
		}
		else if(mvpyds >= 100 || score1 >=7){
			tds = Math.floor(Math.random() * 1);
		}
        wrapup.innerHTML+= "Touchdowns scored: " +tds + "<br>";
    }
    // if its a close game trigger this block
    else if (score1 - score0 <= 15){
    	wrapup.innerHTML+="close game!<br>";
        wrapup.innerHTML+=tm1[0].innerHTML + " came away with a close victory.<br>";
        wrapup.innerHTML+= tm0[0].innerHTML + " put up a good fight but comes away with a loss<br><br>";
        wrapup.innerHTML+= "Player of the game: " +tm1[0].innerHTML;
        wrapup.innerHTML+= " " +positions[Math.floor(Math.random() * 4)];
        wrapup.innerHTML+= " #" +Math.floor(Math.random() * 99);
        wrapup.innerHTML+="<br>Total yards gained or thrown for: " +mvpyds  +"<br>"; 
		if (mvpyds >= 200 || score1 >=14){
            tds = Math.floor((Math.random() * 3) + 1);       
		}
		else if(mvpyds >= 100 || score1 >=7){
			tds = Math.floor(Math.random() * 1);
		}
        wrapup.innerHTML+= "Touchdowns scored: " +tds + "<br>";
    }
	wrapup.innerHTML+=tm1[0].innerHTML +" triumphs over  "+tm0[0].innerHTML +" " + score1 + " to " +score0;
}
// if its a tie trigger this block
else{
	var wrapup = document.getElementById("wrapup");
	wrapup.innerHTML+="Game was a tie";
}

wrapup.innerHTML+= "<br><br>We at the sports network hope you enjoyed tonight's College Football!";
