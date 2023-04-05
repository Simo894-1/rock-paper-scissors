function getComputerChoice(player) {
    // Create Array of choices
    const answer = ["rock", "paper", "scissors"];

    // Generate between 0 and 2, and use it to select choice
    const computerChoice = answer[Math.floor(Math.random() * 3)];

    // Check for a draw
    if (player === computerChoice) {
        alert("Draw");
    }
    // Check win
    else if (
        (player === "scissors" && computerChoice === "paper") || // Scissors > Paper
        (player === "rock" && computerChoice === "scissors") || // Rock >scissors
        (player === "paper" && computerChoice === "rock") // Paper > rock
    ) {
        alert("You won!!");
    }
    // If not computer wins
    else {
        alert("Computer Won!!");
    }
}
