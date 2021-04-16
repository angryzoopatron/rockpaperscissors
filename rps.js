function computerPlay(){
   myArray = ['rock', 'paper', 'scissors'];
   let choice = Math.floor(Math.random() * 3); 
   return myArray[choice];
}


function playRound(player, computer){
    let result = "";
    if(player === 'rock'){
        if(computer === 'scissors'){
            result = 'Rock beats scissors, player wins!';
        }else if(computer === 'paper'){
            result = 'Paper beats rock, computer wins!';
        }else{
            result = 'Both chose rock, DRAW!';
        }
    }else if(player === 'paper'){
        if(computer === 'rock'){
            result = 'Paper beats rock, player wins!';
        }else if(computer === 'scissors'){
            result = 'Scissors beats paper, computer wins!';
        }else{
            result = 'Both chose paper, DRAW!';
        }
    }else if(player === 'scissors'){
        if(computer === 'paper'){
            result = 'Scissors beats paper, player wins!';
        }else if(computer === 'rock'){
            result = 'Rock beats scissors, computer wins!';
        }else{
            result = 'Both chose scissors, DRAW!';
        }
    }else{
        result = "INVALID ENTRY, PLEASE TRY AGAIN!";
    }
    return result;
}


function game(){
    playerSelection = prompt("rock, paper, or scissors? ").toLowerCase();
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

}

game();