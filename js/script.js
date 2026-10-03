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

console.log(getComputerChoice()); //testing computer selection
