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
		return "Tie.";
	}

	if (user !== "rock" && user !== "paper" && user !== "scissors") {
		return "Invalid input.";
	}

	if (user === "rock") {
		if (computerChoice === "paper") {
			return "Paper beats rock; the computer won.";
		} else if (computerChoice === "scissors") {
			return "Scissors beat rock; you won.";
		}
	}

	if (user === "paper") {
		if (computerChoice === "scissors") {
			return "Scissors beat paper; the computer won.";
		} else if (computerChoice === "rock") {
			return "Paper beats rock; you won.";
		}
	}

	if (user === "scissors") {
		if (computerChoice === "rock") {
			return "Rock beats scissors; the computer won.";
		} else if (computerChoice === "paper") {
			return "Scissors beat paper; you won.";
		}
	}
}

function playGame() {
	let user = getUserChoice();
	let computerChoice = getComputerChoice();
	document.getElementById("user-choice").innerHTML = user;
	document.getElementById("computer-choice").innerHTML = computerChoice;
	document.getElementById("winner").innerHTML = determineWinner(user, computerChoice);
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