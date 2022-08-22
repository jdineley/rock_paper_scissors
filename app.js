// console.log('connected')

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

// getComputerChoice();

function playRound(getComputerChoice, getPlayerChoice){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(playerChoice, computerChoice);
    if(playerChoice === computerChoice){
        console.log('A draw, play again!');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        console.log(`Player chose: ${playerChoice},  Computer chose: ${computerChoice}:  Player wins!`)
    } 
    else if (playerChoice === 'rock' && computerChoice === 'paper'){
        console.log(`Player chose: ${playerChoice},  Computer chose: ${computerChoice}:  Computer wins!`)
    } 
    else if (playerChoice === 'paper' && computerChoice === 'scissors'){
        console.log(`Player chose: ${playerChoice},  Computer chose: ${computerChoice}:  Computer wins!`)
    } 
    else if (playerChoice === 'paper' && computerChoice === 'rock'){
        console.log(`Player chose: ${playerChoice},  Computer chose: ${computerChoice}:  Player wins!`)
    } 
    else if (playerChoice === 'scissors' && computerChoice === 'rock'){
        console.log(`Player chose: ${playerChoice},  Computer chose: ${computerChoice}:  Computer wins!`)
    } 
    else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        console.log(`Player chose: ${playerChoice},  Computer chose: ${computerChoice}:  Player wins!`)
    } 
}

playRound(getComputerChoice, getPlayerChoice);