// Using a random
function computerPlay () {
  const moves = Array("rock", "paper", "scissors");
  const move = moves[Math.floor(Math.random() * moves.length)];
  return move.toString();
}

// Compares the choice of the player and the choice of the computer and returns a winner after comparing the moves.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" &&  computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  }
  else if (computerSelection === "paper" &&  playerSelection === "rock") {
    return "You Lose! Paper beats Rock";
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "You Lose! Rock beats Scissors";
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You Lose! Scissors beats Paper";
  }
  else {
    return "Tie Game!";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
