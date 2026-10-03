// Getting random computer selection

const option1 = "rock";
const option2 = "paper";
const option3 = "scissors";

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
    (computerChoice === "rock" && humanChoice === "scissor") ||
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

// Playing 5 rounds and declaring a winner

function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanSelection = prompt("Please enter rock, paper or scissors");
    const humanChoice = humanSelection.toLowerCase();
    playRound(humanChoice, computerChoice);
  }
  console.log("Human Score:", humanScore);
  console.log("Computer Score:", computerScore);
}
playGame();

//Winner

function winner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log(`You win! Your score is ${humanScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You have lost!`);
  } else if (humanScore === computerScore) {
    console.log(`Its a tie`);
  }
}
winner(humanScore, computerScore);
