const GAME_CHOICES = ["rock","paper","scissor"];
const MAX_ROUND = 5;
let computerScore = 0;
let humanScore = 0;
let roundNumber = 0;

function playGame(humanChoice){
    let computerChoice;
    roundNumber++;
    if(roundNumber <= MAX_ROUND){
        console.log(`Round ${roundNumber}...`);
        computerChoice = getComputerChoice();
        result = playRound(computerChoice,humanChoice);
        if(result === 1){
            computerScore++;
        } else if(result === -1){
            humanScore++;
        }
    }
    if(roundNumber == MAX_ROUND){
        //decide the final winner
        console.log(`Computer score: ${computerScore}\nYour score: ${humanScore}`);
        if(computerScore === humanScore){
            console.log("No winner today, it's a draw.");
        }else if(computerScore > humanScore){
            console.log("The computer is the final winner.");
        }else{
            console.log("Your are the final winner.");
        }

        //re-initialize game global variables
        humanScore = computerScore = roundNumber = 0;
    }
}

function playRound(computerChoice,humanChoice){
    // return 0 if it is draw, 1 if computer won,
    // and -1 if human won.

    let winCases = {
        [GAME_CHOICES[0]]:GAME_CHOICES[2],
        [GAME_CHOICES[1]]:GAME_CHOICES[0],
        [GAME_CHOICES[2]]:GAME_CHOICES[1]
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
    return GAME_CHOICES[choiceIndex];
}



const humanBtnsContainer = document.querySelector(".human-choice");

humanBtnsContainer.addEventListener('click',(e)=>{
    let value = e.target.value;
    if(GAME_CHOICES.includes(value)) playGame(value);
})
