function getComputeChoice() {
    let numChoice = Math.random();
    return (numChoice > 0.66) ? "ROCK" :
        (numChoice > 0.33) ? "PAPER" : "SCISSORS";
}

function playerSelection() {
    let playerChoiceRaw = prompt("Enter your choice")
    let playerChoiceFinal = playerChoiceRaw.toUpperCase();
    return playerChoiceFinal;
}

let userPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
    
    let msg = "Invalid";
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            msg = "Hey, it's a draw!"
        }
        else if (computerSelection === "PAPER") {
            msg = "Sad! Rock is beaten by paper";
            computerPoints++;
        }
        else {
            msg = "Congratz! Rock beats Scissors! You won.";
            userPoints++;
        }
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            msg = "Congratz! You won! Paper beats rock"
            userPoints++;
        }
        else if (computerSelection === "PAPER") {
            msg = "Hey! It's a draw!";
        }
        else {
            msg = "Sad! You lose! Paper is beaten by Scissors";
            computerPoints++;
        }
    }
    else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            msg = "Sad! You lose! Scissors is beaten by Rock!"
            computerPoints++;
        }
        else if (computerSelection === "PAPER") {
            msg = "Congratz! You won! Scissors beats paper!";
            userPoints++;
        }
        else {
            msg = "Hey! It's a draw!";
        }
    }
    else {
        alert("Invalid input");       
    }
    return msg;
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        const playerSelec = playerSelection();
        if (playerSelec === "Invalid") {
            console.log("Invalid input from the user");
        }
        else {
            const computerSelect = getComputeChoice();
            console.log(playRound(playerSelec, computerSelect));
        }
    }
    if(computerPoints>userPoints){
        console.log(`The winner is the computer! Computer: ${computerPoints} User: ${userPoints}`)
    }
    else if(userPoints>computerPoints){
        console.log(`The winner is the user! Computer: ${computerPoints} User: ${userPoints}`)
    }
    else{
        console.log(`It's a draw!: ${computerPoints} User: ${userPoints}`)
    }
}
game();