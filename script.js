// declare humanScore and computerScore as 0
// function to get computer choice
//      FUNCTION random number between 0-2 --> rock, paper, scissors
// function to get user choice
//      prompt user for choice
// function to compare user choice to computer choice - return winner
//      SWITCH statement to get result
//      update counters for humanScore and computerScore
// function to playGame()
//      should playRound() 5 times
//      LOOP from 0 to 5

let humanScore = 0;
let computerScore = 0;
const roundOptions = ["rock", "paper", "scissors"];
const roundResults = ["You win!", "You lose!", "It's a draw!"];
let computerChoice;
let userChoice;

function getComputerChoice() {
  const computerChoiceIndex = Math.floor(Math.random() * 3);
  computerChoice = roundOptions[computerChoiceIndex];
  return computerChoice;
}

function isUserInput() {
  return roundOptions.includes(userChoice);
}

function getUserChoice() {
  do {
    userChoice = prompt("Do you choose 'rock', 'paper', or 'scissors'?");
    if (isUserInput) {
      return userChoice.toLowerCase().trim();
    } else {
      console.log("Please enter a valid choice.");
    }
  } while (!isUserInput);
}
