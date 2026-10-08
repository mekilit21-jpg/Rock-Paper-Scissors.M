let getComputerChoice = function(){
     const number = Math.floor(Math.random() * 3);

  if (number === 0) return "rock";
  if (number === 1) return "paper";
  return "scissors";
}

let getHumanChoice = function(){
    const playerChoice= prompt("choose rock, paper or scissors").toLowerCase();
    return playerChoice;
}

let humanScore = 0;
let computerScore = 0;
let playRound = function(humanChoice ,computerChoice){
    if (humanChoice === computerChoice){
        return "It's a tie both chose the same.";
    }
   if( (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ){
        humanScore++;
        return `you win! the ${humanChoice} beats ${computerChoice}`;     
}
  computerScore++;
    return `you lose! ${computerChoice} beats ${humanChoice}.`;
};
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log(`score  you: ${humanScore} ,${computerScore}`) 