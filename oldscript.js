"use strict"
		let userChoice = prompt("Rock, paper, scissors?", "");

		let lowercaseUserChoice = userChoice.toLowerCase();

		function getComputerChoice() {
			let number = Math.floor(Math.random() * 3);

			if (number === 0) {
				return "rock";
			} else if (number === 1) {
				return "paper"; 
			} else if (number === 2) {
				return "scissors";
			};
		}

		function determineWinner(lowercaseUserChoice, computerChoice) {
			if (lowercaseUserChoice === computerChoice) {
				return "Tie."
			};

			if (lowercaseUserChoice !== "rock" && lowercaseUserChoice !== "paper" && lowercaseUserChoice !== "scissors") {
				return "Invalid input.";
			};


			if (lowercaseUserChoice === "rock") {
				if (computerChoice === "paper") {
					return "Paper beats rock; the computer won.";
				} else if (computerChoice === "scissors") {
					return "Scissors beat rock; you won.";
				};
			};

			if (lowercaseUserChoice === "paper") {
				if (computerChoice === "scissors") {
					return "Scissors beat paper; the computer won.";
				} else if (computerChoice === "rock") {
					return "Paper beats rock; you won.";
				};
			};

			if (lowercaseUserChoice === "scissors") {
				if (computerChoice === "rock") {
					return "Rock beats scissors; the computer won.";
				} else if (computerChoice === "paper") {
					return "Scissors beat paper; you won.";
				};
			};
		}

		function playGame() {
			let computerChoice = getComputerChoice();
			document.write("Your choice was: " + lowercaseUserChoice + ".");
			document.write("<br><br>");
			document.write("The computer's choice was: " + computerChoice + ".");
			document.write("<br><br>");
			document.write(determineWinner(lowercaseUserChoice, computerChoice))
		}

		playGame();