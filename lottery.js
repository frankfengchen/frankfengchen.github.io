//Generate random lottery numbers in an animated fashion (never stop unless manually stopped)
var foreverLotteryStatus = false; //Global variable
var foreverInterval; //Global varible

function foreverLottery() {
	var interval = 1000; //Refresh interval

	if(foreverLotteryStatus === false) {
		foreverInterval = setInterval(generateLotteryForever, interval);
		document.getElementById("lotteryForeverBtn").innerHTML = "Pause Auto";
		foreverLotteryStatus = true;
	} else {
		clearInterval(foreverInterval);
		document.getElementById("lotteryForeverBtn").innerHTML = "Resume Auto";
		foreverLotteryStatus = false;
	}
}

//Wrapper function to generateLottery() so we can update the right element
function generateLotteryForever() {
	var elem = document.getElementById("lotteryForever");
	generateLottery(elem);
}

//Generate random lottery numbers in an animated fashion (stop in 2 seconds)
function displayLottery() {
	var timeout = 100; //start with 100ms
	var step = 100;
	var elem = document.getElementById("lottery");
	elem.style.color = "black";
	
	do {
		setTimeout(generateLottery, timeout);
		timeout += step;
		step += 100;
	} while(timeout < 2000);

	//Format the final result
	setTimeout(function(){elem.style.color = "green";}, 2000);
}


//Generate PowerBall numbers (6 numbers) and display them
function generateLottery(elem) {
	elem = typeof elem !== "undefined"? elem : document.getElementById("lottery");
	var lottery = [];

	//Generate 5 ball numbers (between 1 and 69)
	for(var i = 0; i < 5; i++){
		lottery.push(generateNum(69));
	}
	//Generate the Powerball number (between 1 and 35)
	lottery.push(generateNum(35));

	elem.innerHTML = lottery;
}

//Generate a random number that ranges from 1 to numDap
function generateNum(numCap){
	//Check if input parameter has valid value; if not assign default value (100)
	numCap = typeof numCap !== "undefined"? numCap : 100; 

	//Return result is between 1 and numCap
	return Math.floor(Math.random() * numCap + 1);
}