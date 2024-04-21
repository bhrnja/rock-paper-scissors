const computerChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return computerChoice[(Math.random() * computerChoice.length) | 0];
}

console.log("The computer chose " + getComputerChoice() + "!");

const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

function playRound(playerSelection, computerSelection) {
    let playerSelection = playerChoice;
    let computerSelection = computerChoice;
}