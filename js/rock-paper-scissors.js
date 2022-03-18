// Method that chooses a random input to use for the computer to choose a move with
function computerPlay () {
  const moves = Array("rock", "paper", "scissors");
  const move = moves[Math.floor(Math.random() * moves.length)];
  return move.toString();
}

// Compares the choice of the player and the choice of the computer and returns a winner after comparing the moves.
function playRound(playerSelection, computerSelection) {
  let winner;

  if (playerSelection === "paper" &&  computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
    winner = "player";
    return winner;
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissors");
    winner = "player";
    return winner;
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
    winner = "player";
    return winner;
  }
  else if (computerSelection === "paper" &&  playerSelection === "rock") {
    console.log("You Lose! Paper beats Rock");
    winner = "computer";
    return winner;
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log("You Lose! Rock beats Scissors");
    winner = "computer";
    return winner;
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log("You Lose! Scissors beats Paper");
    winner = "computer";
    return winner;
  }
  else {
    console.log("Tie Game!");
    winner = "draw";
    return winner;
  }
}

// Function starts and plays through a best of 5 game of rock paper scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose between rock, paper, or scissors.").toLowerCase();
    let computerSelection = computerPlay();
    let playGame = playRound(playerSelection, computerSelection);

    if (playGame === "player") {
      playerScore++;
    }
    else if (playGame === "computer") {
      computerScore++;
    }
    else {
      i--;
    }
  }

  // Checks to see if the player or computer won
  if (playerScore > computerScore) {
    return "The player has won with a score of " + playerScore + " to " + computerScore;
  }
  else if (playerScore < computerScore) {
    return "The computer has won with a score of " + computerScore + " to " + playerScore;
  }
  else {
    return "Tie Game";
  }
}

// Displays the game of rock paper scissors into the console 
console.log(game());
