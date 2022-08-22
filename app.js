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

function playRound(playerSelection, computerSelection){
    console.log(playerSelection(), computerSelection())
}

playRound(getComputerChoice, getPlayerChoice);