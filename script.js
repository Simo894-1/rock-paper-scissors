function getComputerChoice(player) {
    // Create Array of choices
    const choices = ["rock", "paper", "scissors"];
    
    // Generate between 0 and 2, and use it to select choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    // Check for a draw
    if (player === computerChoice) {
      console.log("Draw");
    } 
    // Check player win
    else if (
      (player === "rock" && computerChoice === "scissors") || // Rock >scissors
      (player === "paper" && computerChoice === "rock") || // Paper > rock
      (player === "scissors" && computerChoice === "paper") // Scissors > Paper
    ) {
      console.log("Player Wins");
    } 
    // If not computer wins
    else {
      console.log("Computer Wins");
    }
  }
  