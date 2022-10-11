const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const computerSelection = getComputerChoice();

function getComputerChoice() {
  var values = ["rock", "paper", "scissors"];
  valueToUse = values[Math.floor(Math.random() * values.length)];

  return valueToUse;
}

rockBtn.addEventListener("click", () => {
  console.log(computerSelection);
  if (computerSelection == "rock") {
    playerText.textContent = "Player: Rock";
    computerText.textContent = "Computer: Rock";
    resultText.textContent = "Results: Its A Draw!";
  } else if (computerSelection == "paper") {
    playerText.textContent = "Player: Rock";
    computerText.textContent = "Computer: Paper";
    resultText.textContent = "Results: You Lose!";
  } else {
    playerText.textContent = "Player: Rock";
    computerText.textContent = "Computer: Scissors";
    resultText.textContent = "Results: You Win!";
  }
});

paperBtn.addEventListener("click", () => {
  console.log(computerSelection);
  if (computerSelection == "rock") {
    playerText.textContent = "Player: Paper";
    computerText.textContent = "Computer: Rock";
    resultText.textContent = "Results: You Win!";
  } else if (computerSelection == "paper") {
    playerText.textContent = "Player: Paper";
    computerText.textContent = "Computer: Paper";
    resultText.textContent = "Results: Its A Draw!";
  } else {
    playerText.textContent = "Player: Paper";
    computerText.textContent = "Computer: Scissors";
    resultText.textContent = "Results: You Lose!";
  }
});

scissorsBtn.addEventListener("click", () => {
  console.log(computerSelection);
  if (computerSelection == "rock") {
    playerText.textContent = "Player: Scissors";
    computerText.textContent = "Computer: Rock";
    resultText.textContent = "Results: You Lose!";
  } else if (computerSelection == "paper") {
    playerText.textContent = "Player: Scissors";
    computerText.textContent = "Computer: Paper";
    resultText.textContent = "Results: You Win!";
  } else {
    playerText.textContent = "Player: Scissors";
    computerText.textContent = "Computer: Scissors";
    resultText.textContent = "Results: Its A Draw!";
  }
});
