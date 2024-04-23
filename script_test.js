const computerChoice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return computerChoice[(Math.random() * computerChoice.length) | 0];
}

function playGame(i) {
    let result = "";
    for (let i = 0; i < 5; i++) {

        result += "test\n";

    }

    return result;

}

console.log(playGame());