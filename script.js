const computerSelection = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return computerSelection[(Math.random() * computerSelection.length) | 0];
}

console.log("The computer chose " + getComputerChoice() + "!");

const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

function playRound(playerSelection, computerSelection) {
    
}