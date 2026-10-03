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
const computerChoice = getComputerChoice();
console.log(getComputerChoice()); //testing computer selection

// Getting human selection

const humanSelection = prompt("Please enter rock, paper or scissors");
const humanChoice = humanSelection.toLowerCase();
//console.log(humanChoice);

// Deciding the winner

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (
    (computerChoice === "rock" && humanChoice === "scissor") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissor" && humanChoice === "paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else if (
    (computerChoice === "scissors" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissor")
  ) {
    console.log(`You Win! ${computerChoice} beats ${humanChoice}`);
  } else {
    console.log("Its a tie!");
  }
}
playRound(computerChoice, humanChoice);
