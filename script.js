let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = ()=>{
  return randomNumber = Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess)=>{
 
 let humanDif = Math.abs(targetGuess - humanGuess);
 let computerDif = Math.abs(targetGuess - computerGuess)

if(humanGuess > 10){
  window.alert('Your number is two high choose agian');
}
 if(humanDif <= computerDif){
   return true;
 } else {
   return false;
 }
};


let updateScore = winner =>{
  if(winner === 'human'){
    humanScore++;
  } else if(winner === 'computer'){
    computerScore++;
  }
};

const advanceRound = ()=>{
  currentRoundNumber++;
}



