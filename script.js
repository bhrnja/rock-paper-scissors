// The below function allows the "computer" to choose an array item at random.
const computerChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return computerChoice[(Math.random() * computerChoice.length) | 0];
}

// The below function is the way this program compares the player and computer selection together. 
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a tie! Rock can't beat Rock.";
    }
        else if (playerSelection === "rock" && computerSelection === "Scissors") {
            return "You win! Rock beats Scissors.";
        }
        else if (playerSelection === "rock" && computerSelection === "Paper") {
            return "You lose! Paper beats Rock.";
        }
        else if (playerSelection === "paper" && computerSelection === "Paper") {
            return "It's a tie! Paper can't beat Paper.";
        }
        else if (playerSelection === "paper" && computerSelection === "Rock") {
            return "You win! Paper beats Rock.";
        }
        else if (playerSelection === "paper" && computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper.";
        }
        else if (playerSelection === "scissors" && computerSelection === "Scissors") {
            return "It's a tie! Scissors can't beat Scissors.";
        }
        else if (playerSelection === "scissors" && computerSelection === "Rock") {
            return "You lose! Rock beats Scissors.";
        }
        else if (playerSelection === "scissors" && computerSelection === "Paper") {
            return "You win! Scissors beats Paper.";
        }
        else {
            return "That's not a choice!"
        }
}

// Variables that set and print the answer to the console.
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
console.log("The computer chose " + computerSelection + "!");
console.log("The player chose " + playerSelection + "!");