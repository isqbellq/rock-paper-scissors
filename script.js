"use strict"

function getUserChoice() {
	let userChoice = document.getElementById("user-input").value.toLowerCase();

	return userChoice;
}

function getComputerChoice() {
	let number = Math.floor(Math.random() * 3);

	if (number === 0) {
		return "rock";
	} else if (number === 1) {
		return "paper"; 
	} else if (number === 2) {
		return "scissors";
	}
}

function determineWinner(user, computerChoice) {
	if (user === computerChoice) {
		return "tie.";
	}

	if (user !== "rock" && user !== "paper" && user !== "scissors") {
		return "invalid input.";
	}

	if (user === "rock") {
		if (computerChoice === "paper") {
			return "paper beats rock; the computer won.";
		} else if (computerChoice === "scissors") {
			return "scissors beat rock; you won.";
		}
	}

	if (user === "paper") {
		if (computerChoice === "scissors") {
			return "scissors beat paper; the computer won.";
		} else if (computerChoice === "rock") {
			return "paper beats rock; you won.";
		}
	}

	if (user === "scissors") {
		if (computerChoice === "rock") {
			return "rock beats scissors; the computer won.";
		} else if (computerChoice === "paper") {
			return "scissors beat paper; you won.";
		}
	}
}

function playGame() {
	let user = getUserChoice();
	let computerChoice = getComputerChoice();
	document.getElementById("user-choice").innerHTML = user;
	document.getElementById("computer-choice").innerHTML = computerChoice;
	document.getElementById("winner").innerHTML = determineWinner(user, computerChoice);
	window.scrollTo(0,document.body.scrollHeight);
}

function go() {
	document.getElementById("submit-choice").addEventListener("click", playGame);

	document.addEventListener('keypress', function (e) {
		let key = e.which || e.keyCode;

		if (key === 13) {
			playGame();
		}
	});
}

go();