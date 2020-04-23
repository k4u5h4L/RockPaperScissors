// game.js

const compOpts = ["rock", "paper", "scissors"];

const compNum = Math.floor(Math.random() * 3);

const playerHand = document.getElementById("humanPlayer");
const computerHand = document.getElementById("computerPlayer");

console.log(compNum);

let pScore = 0;
let cScore = 0;

pScore = localStorage.getItem("p1Score");
cScore = localStorage.getItem("compScore");

if (localStorage.getItem("p1Score") == null) {
    pScore = 0;
}
if (localStorage.getItem("compScore") == null) {
    cScore = 0;
}

if (pScore > cScore) {
    document.getElementById("winner").innerHTML = "Player";
} else if (pScore < cScore) {
    document.getElementById("winner").innerHTML = "Computer";
} else {
    document.getElementById("winner").innerHTML = "Draw";
}

document.getElementById("player1").innerHTML = pScore;
document.getElementById("player2").innerHTML = cScore;

let playerNum = 0;

function markRock() {
    playerNum = 1;
    doAnimations();
}

function markPaper() {
    playerNum = 2;
    doAnimations();
}

function markScissors() {
    playerNum = 3;
    doAnimations();
}

function changeImageForHuman() {
    const thatImage = document.getElementById("humanPlayer");
    thatImage.setAttribute("src", "images/" + compOpts[playerNum - 1] + ".png");
}

function changeImageForComp() {
    const thatImage = document.getElementById("computerPlayer");
    thatImage.setAttribute("src", "images/" + compOpts[compNum] + ".png");
}

function doAnimations() {
    playerHand.style.animation = "shakePlayer 2s ease";
    computerHand.style.animation = "shakeComputer 2s ease";

    setTimeout(() => {
        play();
    }, 2000);
}

function play() {
    compareChoice(compOpts[playerNum - 1], compOpts[compNum]);
}

function scoreUpd() {
    const leading = document.getElementById("winner");
    if (pScore > cScore) {
        leading.innerHTML = "Player";
    } else if (pScore < cScore) {
        leading.innerHTML = "Computer";
    } else {
        leading.innerHTML = "Draw";
    }
}

function cacheComp() {
    localStorage.setItem("compScore", cScore);
    document.getElementById("status").innerHTML = "Computer wins!";
    changeImageForComp();
    changeImageForHuman();
}

function cachePlayer() {
    localStorage.setItem("p1Score", pScore);
    document.getElementById("status").innerHTML = "You win!";
    changeImageForComp();
    changeImageForHuman();
}

function waitForReload() {
    setTimeout(() => {
        location.reload();
    }, 2000);
}

function compareChoice(playerChoice, compChoice) {
    //const winner = document.getElementById(); //paragraph to display result
    if (playerChoice == compChoice) {
        console.log("It is a Tie!");
        document.getElementById("status").innerHTML = "It's a Tie!";
        waitForReload();
        return;
    } else {
        if (playerChoice == "rock") {
            if (compChoice == "scissors") {
                console.log("Player Win");
                pScore++;
                scoreUpd();
                cachePlayer();
                waitForReload();
                return;
            } else {
                console.log("computer Win");
                cScore++;
                scoreUpd();
                cacheComp();
                waitForReload();
                return;
            }
        }
        if (playerChoice == "paper") {
            if (compChoice == "scissors") {
                console.log("computer Win");
                cScore++;
                scoreUpd();
                cacheComp();
                waitForReload();
                return;
            } else {
                console.log("Player Win");
                pScore++;
                scoreUpd();
                cachePlayer();
                waitForReload();
                return;
            }
        }
        if (playerChoice == "scissors") {
            if (compChoice == "rock") {
                console.log("computer Win");
                cScore++;
                scoreUpd();
                cacheComp();
                waitForReload();
                return;
            } else {
                console.log("Player Win");
                pScore++;
                scoreUpd();
                cachePlayer();
                waitForReload();
                return;
            }
        }
    }
}

/*

function play() {
    let pscore = 0;
    let cscore = 0;
    //fill these queries
    
    const option = document.querySelector(); //player chooses
    const phand = document.querySelector();
    const chand = document.querySelector();

    const compOpts = ["rock", "paper", "scissors"];

    //this part is incomplete
    const compNum = Math.floor(Math.random() * 3 + 1);
    const compChoice = compOpts[compNum];

    compareChoice(playerChoice, compChoice);
    //
    function scoreUpd() {
        const playerScore = document.getElementById("player1");
        const compScore = document.getElementById("player2");
        playerScore.innerHTML = pscore;
        compScore.innerHTML = cscore;
    }

    function compareChoice(playerChoice, compChoice) {
        const winner = document.getElementById(); //paragraph to display result
        if (playerChoice === compChoice) {
            write.innerHTML = "It is a Tie!";
        }

        if (playerChoice == "rock") {
            if (compareChoice == "scissors") {
                console.log("Player Win");
                pscore++;
                scoreUpd();
                return;
            } else {
                console.log("computer Win");
                cscore++;
                scoreUpd();
                return;
            }
        }
        if (playerChoice == "paper") {
            if (compChoice == "scissors") {
                console.log("computer Win");
                cscore++;
                scoreUpd();
                return;
            } else {
                console.log("Player Win");
                pscore++;
                scoreUpd();
                return;
            }
        }
        if (playerChoice == "scissors") {
            if (compChoice == "rock") {
                console.log("computer Win");
                cscore++;
                scoreUpd();
                return;
            } else {
                console.log("Player Win");
                pscore++;
                scoreUpd();
                return;
            }
        }
    }
}
*/
