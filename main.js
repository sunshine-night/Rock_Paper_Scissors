function playGame(){
    // let computerScore = humanScore = 0;
    // let computerChoice, humanChoice;
    // for(let i=0;i<5;i++){
        
    //     playRound()
    // }
}

function playRound(computerChoice,humanChoice){

}

function getComputerChoice(){
    gameChoices = ["rock","paper","scissor"];
    choiceIndex = Math.floor(Math.random()*3);
    return gameChoices[choiceIndex];
}
function getHumanChoice(){
    choice = prompt("choice either Rock, Paper, or Scissor:");
    return choice;
}

console.log(getComputerChoice());