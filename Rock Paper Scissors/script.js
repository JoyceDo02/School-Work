//check if Rock Paper or Scissor is Clicked
var rockClicked = false;
var paperClicked = false;
var scissorsClicked = false;

//images that appear when computer chooses
var rockSelectImg = new Image();
rockSelectImg.src = "images/rockSelect.jpg";
var paperSelectImg = new Image();
paperSelectImg.src = "images/paperSelect.jpg";
var scissorsSelectImg = new Image();
scissorsSelectImg.src = "images/scissorsSelect.jpg";

//images that appear when the player chooses
var rockPickImg = new Image();
rockPickImg.src = "images/rockPick.jpg";
var paperPickImg = new Image();
paperPickImg.src = "images/paperPick.jpg";
var scissorsPickImg = new Image();
scissorsPickImg.src = "images/scissorsPick.jpg";

//images for when the player rolls over the choices
var rockRollImg = new Image();
rockRollImg.src = "images/rockRollover.jpg";
var paperRollImg = new Image();
paperRollImg.src = "images/paperRollover.jpg";
var scissorsRollImg = new Image();
scissorsRollImg.src = "images/scissorsRollover.jpg";

//images for when the player rolls off the choices
var rockImg = new Image();
rockImg.src = "images/rock.jpg";
var paperImg = new Image();
paperImg.src = "images/paper.jpg";
var scissorsImg = new Image();
scissorsImg.src = "images/scissors.jpg";

//references all of the id's found in the HTML
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var rock2 = document.querySelector("#rock2");
var paper2 = document.querySelector("#paper2");
var scissors2 = document.querySelector("#scissors2");
var count = document.querySelector("#count");
var userWins = document.querySelector("#userWins");
var computerWins = document.querySelector("#computerWins");
var totalTies = document.querySelector("#totalTies");
var playerChose = document.querySelector("#playerChose");
var cpuChose = document.querySelector("#cpuChose");
var output = document.querySelector("#output");
var result = document.querySelector("#result");
const btn=document.querySelector("#btn");
const startScreen=document.querySelector("#startScreen");
const playScreen=document.querySelector("#playScreen");
const endScreen=document.querySelector("#endScreen");

//start screen display
function startGame(){
	startScreen.style.display="block";
	playScreen.style.display="none";
	endScreen.style.display="none";
	btn.value = "Play Game";
	btn.addEventListener("click", function(){playGame();}, false);
}

//play screen display
function playGame(){
	startScreen.style.display="none";
	playScreen.style.display="block";
	btn.value = "End Game";
}

//end screen display
function gameEnd(){
	startScreen.style.display="none";
	playScreen.style.display="none";
	endScreen.style.display="block";
	btn.value="Start Screen";
	btn.addEventListener("click", startGame, false);
}

//button leads to play screen
btn.addEventListener("click", playGame, false);

//event listener for mouse rollover, changes appearance temporarily, conditional makes the click-image-change work
rock.addEventListener("mouseover", function(){if(rockClicked===false){rock.src = rockRollImg.src;} else{paper.src = paperImg.src;}}, false);
paper.addEventListener("mouseover", function(){if(paperClicked === false){paper.src = paperRollImg.src;}}, false);
scissors.addEventListener("mouseover", function(){if(scissorsClicked === false){scissors.src = scissorsRollImg.src;}}, false);

//event listener for mouse roll off, displays original images, conditional makes the click-image-change work
rock.addEventListener("mouseout", function(){if(rockClicked===false){rock.src = rockImg.src};}, false);
paper.addEventListener("mouseout", function(){if(paperClicked === false){paper.src = paperImg.src};}, false);
scissors.addEventListener("mouseout", function(){if(scissorsClicked === false){scissors.src = scissorsImg.src};}, false);

//event listener for player's choice, triggers computer choice and gets the user's choice
rock.addEventListener("click", clickRock, false);
paper.addEventListener("click", clickPaper, false);
scissors.addEventListener("click", clickScissors, false);

//this makes a space for the player's future choice
var userInput = "";

//this begins the count of how many times each side won, tied, or played
var playerWins = 0;
var cpuWins = 0;
var ties = 0;
var counter = 0;

//resets images and words for computer section
function reset(){
	cpuChose.innerHTML = "";
	rock2.src = rockImg.src;
	paper2.src = paperImg.src;
	scissors2.src = scissorsImg.src;
}

//resets/replaces selected image with original image when a new image is clicked
function rockReset(){
	paper.src = paperImg.src;
	scissors.src = scissorsImg.src;
}
function paperReset(){
	rock.src = rockImg.src;
	scissors.src = scissorsImg.src;
}
function scissorsReset(){
	rock.src = rockImg.src;
	paper.src = paperImg.src;
}

//user choice triggers computer choice, gives a value to the player's choice, counts how many times they've played
//once the player chooses a new choice, the innerHTML and images are reset
function clickRock(){
	counter++;
	userInput = 1;
	playerChose.innerHTML = "You chose ROCK!";
	rock.src = rockPickImg.src;
	reset();
	rockReset();
	var idTimer = setTimeout(computerChoice, 1000);
	output.innerHTML = "Computer is choosing...";
	rockClicked = true;
}
function clickPaper(){
	counter++;
	userInput = 2;
	playerChose.innerHTML = "You chose PAPER!";
	paper.src = paperPickImg.src;
	reset();
	paperReset();
	var idTimer = setTimeout(computerChoice, 1000);
	output.innerHTML = "Computer is choosing...";
	paperClicked = true;
}
function clickScissors(){
	counter++;
	userInput = 3;
	playerChose.innerHTML = "You chose SCISSORS!";
	scissors.src = scissorsPickImg.src;
	reset();
	scissorsReset();
	var idTimer = setTimeout(computerChoice, 1000);
	output.innerHTML = "Computer is choosing...";
	scissorsClicked = true;
}

//this big function is the result of the user choosing an image/ rock paper or scissors
function computerChoice(){ //computer "chooses"
	var number = Math.floor(Math.random()*3)+1;
	console.log("The computer chose: " + number);

	if(number==1){
		rock2.src = rockSelectImg.src;
		cpuChose.innerHTML = "Computer chose ROCK!";
	}
	else if(number==2){
		paper2.src = paperSelectImg.src;
		cpuChose.innerHTML = "Computer chose PAPER!";
	}
	else if(number==3){
		scissors2.src = scissorsSelectImg.src;
		cpuChose.innerHTML = "Computer chose SCISSORS!";
	}
	else{
		rock2.src = rockSelectImg.src;
		cpuChose.innerHTML = "Computer chose ROCK!";
	}
	
	console.log("The player chose: " + userInput);

	//decides who won and counts wins or ties
	if(userInput==1 && number==3){
		output.innerHTML = "You win this round!";
		playerWins++;
	}
	else if(userInput==2 && number==1){
		output.innerHTML = "You win this round!";
		playerWins++;
	}
	else if(userInput==3 && number==2){
		output.innerHTML = "You win this round!";
		playerWins++;
	}
	else if(userInput==3 && number==1){
		output.innerHTML = "Computer won this round!";
		cpuWins++;
	}
	else if(userInput==1 && number==2){
		output.innerHTML = "Computer won this round!";
		cpuWins++;
	}
	else if(userInput==2 && number==3){
		output.innerHTML = "Computer won this round!";
		cpuWins++;
	}
	else{
		output.innerHTML = "Tie!";
		ties++;
	}
	
	//counter for player wins
	switch(playerWins){
		default:
			userWins.innerHTML = "Times You've Won: " + playerWins;
		break;
	}
	
	//counter for computer wins
	switch(cpuWins){
		default:
			computerWins.innerHTML = "Times Computer Won: " + cpuWins;
		break;
	}
	
	//counter for number of ties
	switch(ties){
		default:
			totalTies.innerHTML = "Times Tied: " + ties;
		break;
	}
	
	//counts how many plays there are left
	if(counter==0){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==1){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==2){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==3){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==4){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==5){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==6){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==7){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==8){ 
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==9){
		count.innerHTML = "Plays remaining: " + (10-counter);
	}
	else if(counter==10){ //disables event listeners, sets everything to "default", game stops functioning
		count.innerHTML = "There are no plays remaining";
		rock.addEventListener("mouseover", function(){rock.src = rockImg.src; document.body.style.cursor = "default";}, false);
		paper.addEventListener("mouseover", function(){paper.src = paperImg.src; document.body.style.cursor = "default";}, false);
		scissors.addEventListener("mouseover", function(){scissors.src = scissorsImg.src; document.body.style.cursor = "default";}, false);
		
		rock.removeEventListener("click", clickRock, false);
		paper.removeEventListener("click", clickPaper, false);
		scissors.removeEventListener("click", clickScissors, false);
		
		//decides who wins the game and directs to the end page
		if(playerWins>cpuWins){
			btn.addEventListener("click", gameEnd, false);
			output.innerHTML = "You won the game! Click the end game button!";
			result.innerHTML = "CONGRATULATIONS!!! YOU WON " + playerWins + " to " + cpuWins + "!!!!!";
		}
		else if(playerWins<cpuWins){
			btn.addEventListener("click", gameEnd, false);
			output.innerHTML = "The computer won! Click the end game button!";
			result.innerHTML = "Nice Try!!! Computer won " + cpuWins + " to " + playerWins;
		}
		else{
			btn.addEventListener("click", gameEnd, false);
			output.innerHTML = "You tied!!! Click the end game button!";
			result.innerHTML = "Good Job!!! You and the computer tied!";
		}
	}
}