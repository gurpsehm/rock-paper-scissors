function computerPlay () {
  const moves = Array("rock", "paper", "scissors");
  const move = moves[Math.floor(Math.random() * moves.length)];
  return move.toString();
}

console.log(computerPlay());
