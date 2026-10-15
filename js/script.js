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

// Playing 5 rounds

function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanSelection = prompt("Enter rock, paper or scissors");
    const humanChoice = humanSelection.toLowerCase();
    playRound(humanChoice, computerChoice);
  }
  console.log("Human Score:", humanScore);
  console.log("Computer Score:", computerScore);
}

//Declaring overall winner

function winner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log(`You win! Your score is ${humanScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You have lost! Computer scored ${computerScore}`);
  } else {
    console.log(`Its a tie! You both scored ${humanScore}`);
  }
}
playGame();
winner(humanScore, computerScore);
