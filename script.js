// select the element //
const useScoreEl = document.getElementById(`user-score`);
const comScoreEl = document.getElementById(`computer-score`);
const useResultEl = document.getElementById(`use-result`);
const comResultEl = document.getElementById(`com-result`);
const gameEl = document.getElementById(`game`);

// global variable
let result = 0;
let userScore = 0;
let comScore = 0;

// get computer result
function getComputerChoice() {
  const weapons = ["rock", "paper", "scissors"];
  const randomNumber = Math.trunc(Math.random() * weapons.length);
  return weapons[randomNumber];
}

//get result and get user choice
function playGame(userChoice) {
  const comChoice = getComputerChoice();
  if (userChoice === comChoice) {
    result = "DRAW";
  } else if (
    (userChoice === "rock" && comChoice === "scissors") ||
    (userChoice === "paper" && comChoice === "rock") ||
    (userChoice === "scissors" && comChoice === "paper")
  ) {
    result = "WON";
  } else {
    result = "LOST";
  }
  // to show the live out put
  useResultEl.innerText = userChoice;
  comResultEl.innerText = comChoice;
  gameEl.innerText = `Game ${result}`;

  if (result === "WON") {
    gameEl.classList.remove("lost");
    gameEl.classList.remove("draw");
    gameEl.classList.add("won");
    userScore = userScore + 1;
    // to show the live out put
    useScoreEl.innerText = userScore;
  } else if (result === "LOST") {
    gameEl.classList.remove("won");
    gameEl.classList.remove("draw");
    gameEl.classList.add("lost");
    comScore = comScore + 1;
    // to show the live out put
    comScoreEl.innerText = comScore;
  } else if (result === "DRAW") {
    gameEl.classList.remove("won");
    gameEl.classList.remove("lost");
    gameEl.classList.add("draw");
  }
}
