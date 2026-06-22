let gameChoices = ["rock","paper","scissor"];

function playGame(){
    let computerScore = humanScore = 0;
    let computerChoice, humanChoice;
    for(let i=0;i<5;i++){
        console.log(`Round ${i+1}...`);
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        result = playRound(computerChoice,humanChoice);
        if(result === 1){
            computerScore++;
        } else if(result === -1){
            humanScore++;
        }
    }

    //decide the final winner
    console.log(`Computer score: ${computerScore}\nYour score: ${humanScore}`);
    if(computerScore === humanScore){
        console.log("No winner today, it's a draw.");
    }else if(computerScore > humanScore){
        console.log("The computer is the final winner.");
    }else{
        console.log("Your are the final winner.");
    }
}

function playRound(computerChoice,humanChoice){
    // return 0 if it is draw, 1 if computer won,
    // and -1 if human won.

    let winCases = {
        [gameChoices[0]]:gameChoices[2],
        [gameChoices[1]]:gameChoices[0],
        [gameChoices[2]]:gameChoices[1]
    };
    console.log(`You:${humanChoice}\nComputer: ${computerChoice}`);

    if(computerChoice === humanChoice){
        console.log("it's a draw");
        return 0;
    } else if(winCases[computerChoice] === humanChoice){
        console.log("The computer won this round!");
        return 1;
    }
    console.log("You won this round!");
    return -1;

}

function getComputerChoice(){
    let choiceIndex = Math.floor(Math.random()*3);
    return gameChoices[choiceIndex];
}
function getHumanChoice(){
    choice = prompt("choice either Rock, Paper, or Scissor:");
    return choice.toLowerCase();
}


playGame();