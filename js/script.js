// using DOM for the UI for practicing DOM manipulation
const options = ["Rock", "Paper", "Scissors"]; //Refactor to array for easy code readability

//Create game title and selection buttons

const gameTitle = document.querySelector(".title");
const title = document.createElement("h1");
title.textContent = "Rock Paper & Scissors";
gameTitle.appendChild(title);
const containerOptions = document.querySelector(".container");

options.forEach((option) => {
  const button = document.createElement("button");
  button.textContent = option;
  button.classList.add("btn");

  containerOptions.appendChild(button);
});

// Create result and score displays
const resultDisplay = document.createElement("p");
const scoreDisplay = document.createElement("p");
const winnerDisplay = document.createElement("h2");

gameTitle.append(resultDisplay, scoreDisplay, winnerDisplay);

//getting human choice

function getHumanChoice(choice) {
  return choice;
}

//get computer choice

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const computerSelection = options[randomIndex].toLowerCase();

  return computerSelection;
}

//console.log(getComputerChoice()); //testing computer selection

// Deciding the winner

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanChoice, computerChoice) {
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  } else if (
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    humanScore++;
    return `You Win! ${humanChoice} beats ${computerChoice}`;
  } else {
    return "Its a tie!";
  }
}

// Update scores
function updateScore() {
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

//Check overall winner

function winner() {
  if (humanScore >= 5) {
    gameOver = true;
    winnerDisplay.textContent = "Congratulations! You won!";
  } else if (computerScore >= 5) {
    gameOver = true;
    winnerDisplay.textContent = "Game over! The computer won.";
  }

  if (gameOver) {
    containerOptions.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  }
}

containerOptions.addEventListener("click", (e) => {
  const button = e.target.closest("button");

  if (!button || gameOver) return;

  const humanChoice = getHumanChoice(button.textContent.toLowerCase());
  const computerChoice = getComputerChoice();

  console.log("Human:", humanChoice);
  console.log("Computer:", computerChoice);

  resultDisplay.textContent = playRound(humanChoice, computerChoice);

  updateScore();
  winner();
});

updateScore();

//Declaring overall winner
//reset game paly

const resetGame = document.querySelector(".resetGame");
const reset = document.createElement("button");
reset.textContent = "Play another round";
resetGame.appendChild(reset);

reset.addEventListener("click", (e) => {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;

  resultDisplay.textContent = "";
  winnerDisplay.textContent = "";
  updateScore();

  containerOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = false;
  });
});
