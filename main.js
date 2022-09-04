const computerSelection = function getComputeChoice() {
    let numChoice = Math.random();
    return (numChoice > 0.66) ? "ROCK" :
        (numChoice > 0.33) ? "PAPER" : "SCISSORS";
}

const userSelections = Array.from(document.querySelectorAll("button"));
userSelections.forEach(userSelection => userSelection.addEventListener("click", playRound))

//Container
const container = document.querySelector(".container");
container.classList.add("container");
container.style.backgroundColor = "pink";
container.style.marginTop = "20px";
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.borderStyle = "solid";
container.style.borderColor = "black";

//User container
const userContainer = document.createElement("div");
userContainer.classList.add("userContainer");
const userName = document.createElement("h2");
userName.textContent = "USER";
userContainer.append(userName);


//Computer container
const computerContainer = document.createElement("div");
computerContainer.classList.add("computerContainer");
const computerName = document.createElement("h2");
computerName.textContent = "COMPUTER";
computerContainer.append(computerName);

//Round container
const roundContainer = document.createElement("div");
roundContainer.classList.add("roundContainer");
const roundName = document.createElement("h2");
roundName.textContent = "ROUNDS";
roundContainer.append(roundName);
let i = 0;

//Append
container.append(roundContainer);
container.append(userContainer);
container.append(computerContainer);

let userPoints = 0;
let computerPoints = 0;

function playRound() {
    const computerSelection1 = computerSelection();
    let msg = "";
    if (this.getAttribute("class") === "rock") {
        if (computerSelection1 === "ROCK") {
            msg = "Hey, it's a draw!"

        }
        else if (computerSelection1 === "PAPER") {
            msg = "Sad! Rock is beaten by paper";
            computerPoints++;

        }
        else {
            msg = "Congratz! Rock beats Scissors! You won.";
            userPoints++;

        }
    }
    else if (this.getAttribute("class") === "paper") {
        if (computerSelection1 === "ROCK") {
            msg = "Congratz! You won! Paper beats rock"
            ++userPoints;
        }
        else if (computerSelection1 === "PAPER") {
            msg = "Hey! It's a draw!";
        }
        else {
            msg = "Sad! You lose! Paper is beaten by Scissors";
            ++computerPoints;
        }
    }
    else {
        if (computerSelection1 === "ROCK") {
            msg = "Sad! You lose! Scissors is beaten by Rock!"
            ++computerPoints;
        }
        else if (computerSelection1 === "PAPER") {
            msg = "Congratz! You won! Scissors beats paper!";
            ++userPoints;
        }
        else {
            msg = "Hey! It's a draw!";
        }

    }

    i++;
    const roundText = document.createElement("h4");
    roundText.textContent = `ROUND ${i}`
    roundContainer.append(roundText);

    const userSelectionText = document.createElement("h4");
    userContainer.append(userSelectionText);
    userSelectionText.textContent = this.getAttribute("class").toUpperCase();

    const computerSelectionText = document.createElement("h4");
    computerContainer.append(computerSelectionText);
    computerSelectionText.textContent = `${computerSelection1}`;

    if (i == 5) {
        userSelections.forEach(userSelection => userSelection.removeEventListener("click", playRound));
        const results = document.querySelector(".results");
        results.style.backgroundColor = "green";
        results.style.borderStyle = "solid";
        results.style.borderColor = "black";
        results.style.marginTop = "20px";
        results.style.textAlign = "center";

        const puntajeTituloDiv = document.createElement("div");
        const puntajeTitulo = document.createElement("h2");
        puntajeTitulo.textContent = "SCORE";
        puntajeTituloDiv.append(puntajeTitulo);
        results.append(puntajeTituloDiv);


        const puntajesDivs = document.createElement("div");
        puntajesDivs.style.display = "flex";
        puntajesDivs.style.justifyContent = "space-around";
        const puntajeUserDiv = document.createElement("div");
        const puntajeComputerDiv = document.createElement("div");
        puntajesDivs.append(puntajeUserDiv);
        puntajesDivs.append(puntajeComputerDiv);
        results.append(puntajesDivs);

        const userPuntaje = document.createElement("h4");
        const computerPuntaje = document.createElement("h4");
        userPuntaje.innerHTML = `USER <br></br>` + userPoints;
        computerPuntaje.innerHTML = `COMPUTER <br></br>` + computerPoints;
        puntajeUserDiv.append(userPuntaje);
        puntajeComputerDiv.append(computerPuntaje);

        const winnerMsgDiv = document.createElement("div");
        winnerMsgDiv.style.borderStyle = "solid";
        winnerMsgDiv.style.borderColor = "black";
        if (userPoints > computerPoints) {
            winnerMsgDiv.textContent = "CONGRATULATIONS! YOU ARE THE WINNER";
        }
        else if (userPoints < computerPoints) {
            winnerMsgDiv.textConent = "SAD! YOU LOSE";
        }
        else {
            winnerMsgDiv.textContent = "ITS A DRAW";
        }
        results.append(winnerMsgDiv);


    }
}




