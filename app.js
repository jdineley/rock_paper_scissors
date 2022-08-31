const play = document.querySelector('h1')
const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('#player-score-display');
const computerScoreDisplay = document.querySelector('#computer-score-display');
const winner = document.querySelector('#winner');

let playerScore = 0
let computerScore = 0

disableButtons(true)

function reset(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    winner.textContent = '';
    disableButtons(false)
}

play.addEventListener('click', reset)

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let id = e.target.getAttribute('id');
        playerChoice = id;
        playRound(id);
    })
})

function getComputerChoice(){
    let options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*options.length);
    return options[random];
}

function disableButtons(bool){
    buttons.forEach((button) => {
        button.disabled = bool;
    })
}

function playRound(str){
    let result;
    let playerChoice = str.toLowerCase();
    let computerChoice = getComputerChoice();
    if(playerChoice === computerChoice){
        console.log('A draw, play again!');
        result = 'draw'

    } else {
        let gameArrayString = `${playerChoice} ${computerChoice}`
        console.log(gameArrayString);

        switch(gameArrayString) {
            case 'scissors paper':
            case 'paper rock':
            case 'rock scissors':
                console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}: Player wins!!`)
                result = 'player wins'
            break;
            default:
                console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}: Computer wins!!`)
                result = 'computer wins'
        }
    }
    switch(result) {
        case 'draw':
            break;
        case 'player wins':
            playerScore += 1
            break;
        case 'computer wins':
            computerScore += 1
            break;
    }
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if(playerScore === 3){
        console.log(`Player wins game!!  Final score: Player - ${playerScore},  Computer - ${computerScore}`)
        winner.textContent = 'You win!'
        disableButtons(true)
    } else if (computerScore === 3) {
        console.log(`Computer wins game!!  Final score: Computer - ${computerScore},  Player - ${playerScore}`)
        winner.textContent = 'Computer wins!'
        disableButtons(true)
    }
}
