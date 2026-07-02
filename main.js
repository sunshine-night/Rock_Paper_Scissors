const GAME_CHOICES = ["rock","paper","scissor"];
const MAX_ROUND = 5;
let computerScore = 0;
let humanScore = 0;
let roundNumber = 0;

function playGame(humanChoice){
    let computerChoice;
    clearText();
    roundNumber++;
    if(roundNumber <= MAX_ROUND){
        displayText(`Round ${roundNumber}...`);
        computerChoice = getComputerChoice();
        result = playRound(computerChoice,humanChoice);
        if(result === 1){
            computerScore++;
            displayText("The computer won this round!");
        } else if(result === -1){
            humanScore++;
            displayText("You won this round!");
        }else{
            displayText("it's a draw");
        }
    }
    if(roundNumber == MAX_ROUND){
        //decide the final winner
        displayText(`Computer score: ${computerScore}`,`Your score: ${humanScore}`);
        if(computerScore === humanScore){
            console.log("No winner today, it's a draw.");
        }else if(computerScore > humanScore){
            displayText("The computer is the final winner. GG");
        }else{
            displayText("Your are the final winner 🎉");
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
    // console.log(`You:${humanChoice}\nComputer: ${computerChoice}`);

    if(computerChoice === humanChoice){
        return 0;
    } else if(winCases[computerChoice] === humanChoice){
        return 1;
    }
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

function displayText(...textArr){
    const displayBox = document.querySelector(".result");
    textArr.forEach((text)=>{
        let textSpan  = document.createElement("span");
        textSpan.textContent = text;
        displayBox.appendChild(textSpan);
    })
 
}

function clearText(){
    const displayBox = document.querySelector(".result");
    displayBox.textContent = "";
}
