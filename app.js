
function rockPaperScissors(){
    let options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random()*options.length);
    console.log(random);
    return options[random];
}

function getComputerChoice(){
    return rockPaperScissors();
}


function playRound(getComputerChoice, str){
    let playerChoice = str.toLowerCase();
    let computerChoice = getComputerChoice();
    if(playerChoice === computerChoice){
        console.log('A draw, play again!');
        return 'draw'

    } else {
        let gameArrayString = `${playerChoice} ${computerChoice}`
        console.log(gameArrayString);

        switch(gameArrayString) {
            case 'scissors paper':
            case 'paper rock':
            case 'rock scissors':
                console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}: Player wins!!`)
                return 'player wins'
            break;
            default:
                console.log(`Player choice: ${playerChoice}, Computer choice: ${computerChoice}: Computer wins!!`)
                return 'computer wins'
        }
    }

}


function game() {
    let curGame = {
        player: 0,
        computer: 0
    }
    while(curGame.player < 3 && curGame.computer < 3) {
        let playerChoice = prompt('Make your choice now!')
        switch(playRound(getComputerChoice, playerChoice)) {
            case 'draw':
                break;
            case 'player wins':
                curGame.player += 1
                break;
            case 'computer wins':
                curGame.computer += 1
                break;
        }
        console.log(curGame);     
    }
    if(curGame.player === 3){
        console.log(`Player wins game!!  Final score: Player - ${curGame.player},  Computer - ${curGame.computer}`)
    } else {
        console.log(`Computer wins game!!  Final score: Computer - ${curGame.computer},  Player - ${curGame.player}`)
    }
}