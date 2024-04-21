const computerSelection = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return computerSelection[(Math.random() * computerSelection.length) | 0];
}

console.log("The computer chose " + getComputerChoice() + "!");

const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

console.log("The player chose " + playerSelection + "!");

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a tie! Rock can't beat Rock.";
    }
        else if (playerSelection === "paper" && computerSelection === "Paper") {
            return "It's a tie! Paper can't beat Paper.";
        }

        else if (playerSelection === "scissors" && computerSelection === "Scissors") {
            return "It's a tie! Scissors can't beat Scissors.";
        }

        else if (playerSelection === "rock" && computerSelection === "Scissors") {
            return "It's a tie! Scissors can't beat Scissors.";
        }
}

console.log(playRound(playerSelection, getComputerChoice))