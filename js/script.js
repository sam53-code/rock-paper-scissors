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

function getComputerChoice() {
  const options = Math.floor(Math.random() * 3 + 1);

  const computerChoice =
    options === 1 ? option1 : options === 2 ? option2 : option3;

  return computerChoice;
}
//console.log(getComputerChoice()); //testing computer selection

// Deciding the winner

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors")
  ) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log("Its a tie!");
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
