
function rockPaperScissors(){
    let options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*options.length);
    console.log(random);
    return options[random];
}

function getComputerChoice(){
    return rockPaperScissors();
}

function getPlayerChoice(){
    return rockPaperScissors();
}


function playRound(getComputerChoice, getPlayerChoice){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if(playerChoice === computerChoice){
        console.log('A draw, play again!');

    } else {
        let gameArrayString = `${playerChoice} ${computerChoice}`
        console.log(gameArrayString);

        switch(gameArrayString) {
            case 'scissors paper':
            case 'paper rock':
            case 'rock scissors':
                console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}: Player wins!!`)
            break;
            default:
                console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}: Computer wins!!`)
        }
    }

}

playRound(getComputerChoice, getPlayerChoice);