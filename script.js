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

function isUserInput(userChoice) {
  return roundOptions.includes(userChoice.trim().toLowerCase());
}

function getUserChoice() {
  do {
    userChoice = prompt("Do you choose 'rock', 'paper', or 'scissors'?");
    if (isUserInput(userChoice)) {
      userChoice = userChoice.trim().toLowerCase();
      return userChoice;
    } else {
      console.log("Please enter a valid choice.");
    }
  } while (!isUserInput(userChoice));
}

function getResult() {
  if (userChoice == "rock") {
    switch (computerChoice) {
      case "rock":
        return roundResults[2];
        break;
      case "paper":
        computerScore++;
        return roundResults[1];
        break;
      case "scissors":
        humanScore++;
        return roundResults[0];
        break;
    }
  } else if (userChoice == "paper") {
    switch (computerChoice) {
      case "rock":
        humanScore++;
        return roundResults[0];
        break;
      case "paper":
        return roundResults[2];
        break;
      case "scissors":
        computerScore++;
        return roundResults[1];
        break;
    }
  } else {
    switch (computerChoice) {
      case "rock":
        computerScore++;
        return roundResults[1];
        break;
      case "paper":
        humanScore++;
        return roundResults[0];
        break;
      case "scissors":
        return roundResults[2];
        break;
    }
  }
}

function playRound(computerChoice, userChoice) {
  const result = getResult();
  console.log(`You choose: ${userChoice}`);
  console.log(`The computer chose ${computerChoice}. ${result}`);
  console.log(`Your Score: ${humanScore} -- Computer Score: ${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getUserChoice());
  }
  if (humanScore > computerScore) {
    console.log("Final result out of 5 rounds: You win!");
  } else if (humanScore < computerScore) {
    console.log("Final result out of 5 rounds: You lose!");
  } else {
    console.log("Final result out of 5 rounds: It's a draw!");
  }
}

playGame();
