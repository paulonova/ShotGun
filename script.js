

/**Array with all images*/
const gameImageArray = ["images/loadgun.jpg", "images/shield.jpg", "images/shotgun.jpg"];
const imageArray = ["images/dator.jpg", "images/result.jpg", "images/user.jpg"];

/** Player Classes */
function Player(){
    this.name;
    this.shotPoints;
    this.choice;

    this.increaseShotPoints = function(){
        this.shotPoints ++;
    }

    this.decreaseShotPoints = function(){
        this.shotPoints --;
    }

}

function Computer(){
    this.prototype = new Player();

    this.increaseShotPoints = function(){
        this.shotPoints ++;
    }

    this.decreaseShotPoints = function(){
        this.shotPoints --;
    }

    this.randomChoice = function(){
        var randomNumber = Math.random();

        if (randomNumber <= 0.34) {
            return 'Skjuta';
        } else if (randomNumber <= 0.67) {
            return 'Blocka';
        } else {
            return 'Ladda';
        }
    }
}

var user = new Player();
user.name = "Paulo";
user.shotPoints = 0;

var dator = new Computer();
dator.name = "Dator";
dator.shotPoints = 0;


console.log(dator.name);
console.log(dator.choice);
console.log(dator.shotPoints);



var setImagesOnStart = function(){	
	var imgCompPlayer = document.getElementById("thumb1").src = imageArray[0];
	var imgUserPlayer = document.getElementById("thumb2").src = imageArray[1];
	var imgResult = document.getElementById("thumb3").src = imageArray[2];

}();



/** Computer random results */ 
var datorLi = document.getElementById("data-result-list");
var datorButton = document.getElementById("data-player");
datorButton.disabled = true;


datorButton.addEventListener("click", function(){

    dator.choice = dator.randomChoice();
    console.log("CHOICE ", dator.choice);
    datorLi.innerHTML = dator.name + " " + dator.choice;    

    if((user.shotPoints == 3 && user.choice == "Skjuta") || (dator.shotPoints == 3 && dator.choice == "Skjuta")){
        console.log("Inside 01");

        if(dator.shotPoints == 3 || dator.shotPoints != 3){
            console.log("Inside 02");

            if(dator.choice == "Blocka"){
                console.log("Inside 04");
                enableUserDisableData();
                user.decreaseShotPoints();
                document.getElementById("thumb1").src = gameImageArray[1];
                document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
                shotGun(user.name);
                refreshPage();

            }else if(dator.choice == "Skjuta"){
                console.log("Inside 05");

                if(dator.shotPoints > 0 && dator.shotPoints != 3){
                    enableUserDisableData();
                    lostAShot("Data");
                    dator.decreaseShotPoints();
                    // userShotPoints --;
                    document.getElementById("thumb1").src = gameImageArray[2];
                    document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;

                }else if(dator.shotPoints == 3){
                    enableUserDisableData();							
                    dator.decreaseShotPoints();
                    document.getElementById("thumb1").src = gameImageArray[2];
                    document.getElementById("data-shot-point").innerHTML = "Shot Gun";
                    shotGun(dator.name);
                    refreshPage();
                }
                
                else{
                    document.getElementById("data-shot-point").innerHTML = "Behöver Laddar";
                    document.getElementById("data-shot-point").style.color = "red";
                }
                
                

            } else if(dator.choice == "Ladda"){
                console.log("Inside 06");
                enableUserDisableData();
                shotGun(user.name);                
                dator.increaseShotPoints();
                user.decreaseShotPoints();
                document.getElementById("thumb1").src = gameImageArray[0];
                document.getElementById("data-shot-point").style.color = "black";
                document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
                refreshPage();
            }else {
                console.log("Something wrong");
            }	

        }else if(dator.shotPoints == 3 && user.shotPoints != 3){
            console.log("Inside 07");

            if(dator.choice === "Skjuta" && (user.choice === "Blocka" || user.choice === "Skjuta" || user.choice == "Ladda")){
                console.log("Inside 08");
                document.getElementById("thumb1").src = gameImageArray[2];
                enableUserDisableData();
                dator.decreaseShotPoints();
                console.log("Skjuta points ",dator.shotPoints)
                document.getElementById("data-shot-point").innerHTML = "Shot Gun";
                shotGun(dator.name);
                refreshPage();
            }
        }


    }else{
        console.log("Inside 09");

        if(user.choice == "Ladda" && dator.choice == "Ladda"){
            document.getElementById("thumb1").src = gameImageArray[0];
            enableUserDisableData();					
            dator.increaseShotPoints();
            console.log("Ladda points ", dator.shotPoints)
            document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
            document.getElementById("data-shot-point").style.color = "black";
            getAShot(user.name + " & " + dator.name);

        }else if(user.choice == "Ladda" && dator.choice == "Blocka"){
            document.getElementById("thumb1").src = gameImageArray[1];
            enableUserDisableData();
            console.log("Blocka points",dator.shotPoints)
            document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
            document.getElementById("data-shot-point").style.color = "black";
            getAShot(user.name)

        }else if(dator.choice == "Ladda" && user.choice == "Blocka"){
            document.getElementById("thumb1").src = gameImageArray[0];
            enableUserDisableData();
            dator.increaseShotPoints();
            console.log("Ladda points ", dator.shotPoints)
            document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
            document.getElementById("data-shot-point").style.color = "black";
            getAShot(dator.name);

        }else if(user.choice == "Blocka" && dator.choice == "Blocka"){
            document.getElementById("thumb1").src = gameImageArray[1];
            enableUserDisableData();
            console.log("Blocka points ", dator.shotPoints)
            document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
            document.getElementById("data-shot-point").style.color = "black";
            nothingHappend();

        }else if(user.choice == "Skjuta" && dator.choice == "Blocka"){
            document.getElementById("thumb1").src = gameImageArray[1];
            enableUserDisableData();
            if(user.shotPoints == 4){
                user.decreaseShotPoints();
            }
            console.log("Blocka points ", dator.shotPoints);
            document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
            document.getElementById("data-shot-point").style.color = "black";
            lostAShot(user.name);
                            

        }else if(user.choice == "Blocka" && dator.choice == "Skjuta"){
            document.getElementById("thumb1").src = gameImageArray[2];

            if(dator.shotPoints > 0){
                enableUserDisableData();
                dator.decreaseShotPoints();
                console.log("Skjuta points ", dator.shotPoints);
                document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
                lostAShot(dator.name);

            }else{
                document.getElementById("data-shot-point").innerHTML = "Behöver Laddar";
                document.getElementById("data-shot-point").style.color = "red";
            }

        }else if(user.choice == "Skjuta" && dator.choice == "Skjuta"){
            document.getElementById("thumb1").src = gameImageArray[2];

            if(user.shotPoints == 4){
                user.decreaseShotPoints();
            }
            
            if(dator.shotPoints > 0){
                enableUserDisableData();
                dator.decreaseShotPoints();
                console.log("Skjuta points",dator.shotPoints)
                document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
                lostAShot(user.name + " & " + dator.name);

            }else{
                document.getElementById("data-shot-point").innerHTML = "Behöver Laddar";
                document.getElementById("data-shot-point").style.color = "red";
            }
            

        }else if(user.choice == "Skjuta" && dator.choice == "Ladda"){
            document.getElementById("thumb1").src = gameImageArray[0];
            enableUserDisableData();
            if(user.shotPoints == 4){
                user.decreaseShotPoints();
            }
            dator.increaseShotPoints();
            console.log("Skjuta points ", dator.shotPoints)
            document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
            playerWins(user.name);
            refreshPage();

        }else if(user.choice == "Ladda" && dator.choice == "Skjuta"){
            document.getElementById("thumb1").src = gameImageArray[2];

            if(dator.shotPoints > 0){
                enableUserDisableData();
                dator.decreaseShotPoints();
                console.log("Skjuta points ", dator.shotPoints)
                document.getElementById("data-shot-point").innerHTML = "Skjut poängs: " + dator.shotPoints;
                playerWins(dator.name);
                refreshPage();

            }else{
                document.getElementById("data-shot-point").innerHTML = "Behöver Laddar";
                document.getElementById("data-shot-point").style.color = "red";
            }					

        }

    }
        console.log("******************************");
        console.log("Dator choice: ", dator.choice);
        console.log("Data points: ", dator.shotPoints);
        console.log("User choice: ", user.choice);
        console.log("User points: ", user.shotPoints);
        console.log("******************************");

});


/** Function to enable dator btn and disable the user btn. */
function enableDataDisableUser(){
    
        datorButton.disabled = false;
        document.getElementById("user-shield").disabled = true;
        document.getElementById("user-shot").disabled = true;
        document.getElementById("user-load").disabled = true;	
}

/** Function to enable user btn and disable the data btn. */
function enableUserDisableData(){
    datorButton.disabled = true;
    document.getElementById("user-shield").disabled = false;
    document.getElementById("user-shot").disabled = false;
    document.getElementById("user-load").disabled = false;	
}




/** User - Shot */ 
var userLi = document.getElementById("user-result-list");
var userButtonShot = document.getElementById("user-shot");
userButtonShot.addEventListener("click", function(){

    user.choice = "Skjuta";
    whoWinns();

    if(user.shotPoints > 0){
		if(user.shotPoints == 3){
			enableDataDisableUser();
			//take no points...
			console.log("Shot Gun", user.shotPoints);
			document.getElementById("user-shot-point").innerHTML = "Shot Gun";

		}else if(user.shotPoints == 4){
			enableDataDisableUser();
			//take no points...
			console.log("Shot Gun", user.shotPoints);
			document.getElementById("user-shot-point").innerHTML = "Skjut poängs: " + (user.shotPoints - 1);

		}else{
			enableDataDisableUser();
			user.decreaseShotPoints();
			console.log("Skjuta points", user.shotPoints);
			document.getElementById("user-shot-point").innerHTML = "Skjut poängs: " + user.shotPoints;
		}
		
	}else {
		document.getElementById("user-shot-point").innerHTML = "Behöver Laddar ";
		document.getElementById("user-shot-point").style.color = "red";
	}	

	//Logiskt method
	userLi.innerHTML = "User: " + user.choice;
	document.getElementById("thumb3").src = gameImageArray[2];
	console.log("User choice: ", user.choice);

});


//User - Load
var userButtonLoad = document.getElementById("user-load");
userButtonLoad.addEventListener("click", function(){

	user.choice = "Ladda";
	whoWinns();
	enableDataDisableUser();
	user.increaseShotPoints();
	document.getElementById("user-shot-point").style.color = "black";
	document.getElementById("user-shot-point").innerHTML = "Skjut poängs: " + user.shotPoints;
	userLi.innerHTML = "User: " + user.choice;
	document.getElementById("thumb3").src = gameImageArray[0];
    console.log("User choice: ", user.choice);
});


//User - Shield
var userButtonShield = document.getElementById("user-shield");
userButtonShield.addEventListener("click", function(){
	user.choice = "Blocka";
	whoWinns();
	enableDataDisableUser();
	document.getElementById("user-shot-point").style.color = "black";
	document.getElementById("user-shot-point").innerHTML = "Skjut poängs: " + user.shotPoints;
	userLi.innerHTML = "User: " + user.choice;
	document.getElementById("thumb3").src = gameImageArray[1];
	console.log("User choice: ", user.choice);
	
});


/** To refresh the page when someone wins*/
function refreshPage(){
    setTimeout(function(){
        document.location.reload(true);
    }, 2000);
    
}


//Functions of who wins
function playerWins(player){
	document.getElementById("who-wins").innerHTML = player +  " Wins!";
}

function nobodyWins(){
	document.getElementById("who-wins").innerHTML = "Nobody wins!";
}

function getAShot(player){
	document.getElementById("who-wins").innerHTML = player + "<br>get a Shot";
}

function lostAShot(player){
	document.getElementById("who-wins").innerHTML = player + "<br>lost a Shot";
}

function nothingHappend(){
	document.getElementById("who-wins").innerHTML = "Nothing happend";
}

function shotGun(player){
	document.getElementById("who-wins").innerHTML = "Shot Gun!<br>" + player + " has Won!";
}

function whoWinns(){
	document.getElementById("who-wins").innerHTML = "Who wins?!";
}

