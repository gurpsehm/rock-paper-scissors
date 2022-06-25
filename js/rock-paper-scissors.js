// Method that chooses a random input to use for the computer to choose a move with
function computerPlay () {
  const moves = Array("rock", "paper", "scissors");
  const move = moves[Math.floor(Math.random() * moves.length)];
  return move.toString();
}

// Compares the choice of the player and the choice of the computer and returns a winner after comparing the moves.
function playRound(playerSelection, computerSelection) {
  let winner;

  if (playerSelection === "btnPaper" &&  computerSelection === "rock") {
    roundResultContent.textContent = "You Win! Paper beats Rock";
    roundResultContainer.appendChild(roundResultContent); 
    winner = "player";
    return winner;
  }
  else if (playerSelection === "btnRock" && computerSelection === "scissors") {
    roundResultContent.textContent = "You Win! Rock beats Scissors";
    roundResultContainer.appendChild(roundResultContent); 
    winner = "player";
    return winner;
  }
  else if (playerSelection === "btnScissors" && computerSelection === "paper") {
    roundResultContent.textContent = "You Win! Scissors beats Paper";
    roundResultContainer.appendChild(roundResultContent); 
    winner = "player";
    return winner;
  }
  else if (computerSelection === "paper" && playerSelection === "btnRock") {
    roundResultContent.textContent = "You Lose! Paper beats Rock";
    roundResultContainer.appendChild(roundResultContent); 
    winner = "computer";
    return winner;
  }
  else if (computerSelection === "rock" && playerSelection === "btnScissors") {
    roundResultContent.textContent = "You Lose! Rock beats Scissors";
    roundResultContainer.appendChild(roundResultContent); 
    winner = "computer";
    return winner;
  }
  else if (computerSelection === "scissors" && playerSelection === "btnPaper") {
    roundResultContent.textContent = "You Lose! Scissors beats Paper";
    roundResultContainer.appendChild(roundResultContent);   
    winner = "computer";
    return winner;
  }
  else {
    roundResultContent.textContent = "This round is a draw!";
    roundResultContainer.appendChild(roundResultContent); 
    winner = "draw";
    return winner;
  }
}

// Function starts and plays through a best of 5 game of rock paper scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;
  const buttons = document.querySelectorAll('button');

  let playGame = buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let round = playRound(button.id, computerPlay());
      
      if (round === "player") {
        playerScore++;
      }
      else if (round === "computer") {
        computerScore++;
      }

      scoreContent.textContent = ("The player score is: " + playerScore + ". The computer score is: " + computerScore);
      scoreResultContainer.appendChild(scoreContent);

      // Checks to see if the player or computer won
      if (playerScore === 5) {
        for(let i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        }
        
        scoreContent.textContent = ("The player has won with a score of " + playerScore + " to " + computerScore + "!");
        scoreResultContainer.appendChild(scoreContent);
      }
      else if (computerScore === 5) {
        for(let i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        } 

        scoreContent.textContent = ("The computer has won with a score of " + computerScore + " to " + playerScore + "!");
        scoreResultContainer.appendChild(scoreContent);
      }
    });
  });


}

const scoreResultContainer = document.querySelector('#scoreResults');
const scoreContent = document.createElement('scoreDiv')
scoreContent.classList.add('scoreContent');

const roundResultContainer = document.querySelector('#roundResults');
const roundResultContent = document.createElement('roundResultDiv');
roundResultContent.classList.add('roundResultContent');


game();