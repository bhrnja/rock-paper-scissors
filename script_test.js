// The below function allows the "computer" to choose an array item at random.
const computerChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return computerChoice[(Math.random() * computerChoice.length) | 0];
}

function playGame(i) {
    let result = "";
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();

        if (playerSelection === "rock" && computerSelection === "Rock") {
            result += "It's a tie! Rock can't beat Rock.";
        }
            else if (playerSelection === "rock" && computerSelection === "Scissors") {
                result += "You win! Rock beats Scissors.";
            }
            else if (playerSelection === "rock" && computerSelection === "Paper") {
                result += "You lose! Paper beats Rock.";
            }
            else if (playerSelection === "paper" && computerSelection === "Paper") {
                result += "It's a tie! Paper can't beat Paper.";
            }
            else if (playerSelection === "paper" && computerSelection === "Rock") {
                result += "You win! Paper beats Rock.";
            }
            else if (playerSelection === "paper" && computerSelection === "Scissors") {
                result += "You lose! Scissors beats Paper.";
            }
            else if (playerSelection === "scissors" && computerSelection === "Scissors") {
                result += "It's a tie! Scissors can't beat Scissors.";
            }
            else if (playerSelection === "scissors" && computerSelection === "Rock") {
                result += "You lose! Rock beats Scissors.";
            }
            else if (playerSelection === "scissors" && computerSelection === "Paper") {
                result += "You win! Scissors beats Paper.";
            }
            else {
                result += "That's not a choice!"
            }


        // We're getting somewhere!

    }

    return result;

}

console.log(playGame());