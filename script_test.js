// The below function allows the "computer" to choose an array item at random.
const computerChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return computerChoice[(Math.random() * computerChoice.length) | 0];
}

// The below function is what plays the game of rock, paper, scissors.
// The empty string variables of result and gameWinner allows the program
// to keep track of the progress of the game round by round and relay that
// back to the console.
function playGame(i) {
    let result = "";
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = "";
    // This loop establishes that the game will run for six rounds.
    for (let i = 1; i < 6; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice();

        if (playerSelection === "rock" && computerSelection === "Rock") {
            result += `Round ${i}: ` + "It's a tie! Rock can't beat Rock.\n";
        }
            // Alongside appending to the "result" variable. Here we're adding to
            // another tracker, playerScore and computerScore.
            else if (playerSelection === "rock" && computerSelection === "Scissors") {
                result += `Round ${i}: ` + "You win! Rock beats Scissors.\n";
                playerScore += 1;
            }
            else if (playerSelection === "rock" && computerSelection === "Paper") {
                result += `Round ${i}: ` + "You lose! Paper beats Rock.\n";
                computerScore += 1;
            }
            else if (playerSelection === "paper" && computerSelection === "Paper") {
                result += `Round ${i}: ` + "It's a tie! Paper can't beat Paper.\n";
            }
            else if (playerSelection === "paper" && computerSelection === "Rock") {
                result += `Round ${i}: ` + "You win! Paper beats Rock.\n";
                playerScore += 1;
            }
            else if (playerSelection === "paper" && computerSelection === "Scissors") {
                result += `Round ${i}: ` + "You lose! Scissors beats Paper.\n";
                computerScore += 1;
            }
            else if (playerSelection === "scissors" && computerSelection === "Scissors") {
                result += `Round ${i}: ` + "It's a tie! Scissors can't beat Scissors.\n";
            }
            else if (playerSelection === "scissors" && computerSelection === "Rock") {
                result += `Round ${i}: ` + "You lose! Rock beats Scissors.\n";
                computerScore += 1;
            }
            else if (playerSelection === "scissors" && computerSelection === "Paper") {
                result += `Round ${i}: ` + "You win! Scissors beats Paper.\n";
                playerScore += 1;
            }
            else {
                result += `Round ${i}: ` + "That's not a choice!\n"
            }
    }

    // Comparing playerScore and computerScore to decide and append the winner
    // of the game to gameWinner.
    if (playGame > computerScore) {
        gameWinner += "You won the game!"
    }
        else {
            gameWinner += "You lost the game."
        }
    
    // All log and return statements needed for the player to know the progress of the game.
    console.log(`You won ${playerScore} round(s) out of 5!`)
    console.log(`The computer won ${computerScore} round(s) out of 5!`)
    console.log(gameWinner)
    return result;

}

// Function call to  play the game in the console.
console.log(playGame());