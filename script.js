const rock = 0;
const paper = 1; 
const scissors = 2;


function getComputerChoice () {

    let computerChoice = Math.floor(Math.random() * 3); 

    if (computerChoice === rock) {
        console.log("rock");
    } else if (computerChoice === paper) {
        console.log("Paper");
    } else if (computerChoice === scissors) {
        console.log("scissors");
    } else {
        return "No choice was made"
    }
}

