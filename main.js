const computerSelection = function getComputeChoice() {
    let numChoice = Math.random();
    return (numChoice > 0.66) ? "ROCK" :
        (numChoice > 0.33) ? "PAPER" : "SCISSORS";
}

const userSelections = Array.from(document.querySelectorAll("button"));
userSelections.forEach(userSelection => userSelection.addEventListener("click", playRound))

/*Container
const container = document.querySelector(".container");
container.classList.add("container");

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
container.append(computerContainer);*/

let userPoints = 0;
let computerPoints = 0;

function playRound() {
    const computerSelection1 = computerSelection();
    const userSign = document.querySelector(".user-sign");
    const pcSign = document.querySelector(".computer-sign");
    userSign.textContent = "";
    pcSign.textContent = "";
    let msg = "";
    console.log(this);
    const symbolUser = document.querySelector(`.${this.getAttribute("class")} .sign`);
    userSign.textContent = symbolUser.innerText; 
    const symbolPC = document.querySelector(`.${computerSelection1} .sign`);
    pcSign.textContent = symbolPC.innerText;
    if (this.getAttribute("class") === "rock") {   
           
        if (computerSelection1 === "ROCK") {
            msg = "Es un empate!"

        }
        else if (computerSelection1 === "PAPER") {
            msg = "Perdiste!"
            computerPoints++;

        }
        else {
            msg = "Ganaste!";
            userPoints++;

        }
    }
    else if (this.getAttribute("class") === "paper") {
        if (computerSelection1 === "ROCK") {
            msg = "Ganaste!"
            ++userPoints;
        }
        else if (computerSelection1 === "PAPER") {
            msg = "Es un empate!";
        }
        else {
            msg = "Perdiste!";
            ++computerPoints;
        }
    }
    else {
        if (computerSelection1 === "ROCK") {
            msg = "Perdiste!"
            ++computerPoints;
        }
        else if (computerSelection1 === "PAPER") {
            msg = "Ganaste!";
            ++userPoints;
        }
        else {
            msg = "Es un empate!";
        }

    }    

    const usScore = document.querySelector(".user-score span");
    const pcScore = document.querySelector(".computer-score span");
    const resultMsg = document.querySelector(".title-msg");
    resultMsg.innerText = msg;
    usScore.innerText = userPoints;
    pcScore.innerText = computerPoints;

    /*i++;
    const roundText = document.createElement("h4");
    roundText.textContent = `ROUND ${i}`
    roundContainer.append(roundText);

    const userSelectionText = document.createElement("h4");
    userContainer.append(userSelectionText);
    userSelectionText.textContent = this.getAttribute("class").toUpperCase();

    const computerSelectionText = document.createElement("h4");
    computerContainer.append(computerSelectionText);
    computerSelectionText.textContent = `${computerSelection1}`;*/

    /*if (i == 5) {
        userSelections.forEach(userSelection => userSelection.removeEventListener("click", playRound));
        const results = document.querySelector(".results");
        results.classList.add("results");        

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


    }*/
}