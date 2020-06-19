// User Selection

//let playerMove = prompt(`rock, paper, or scissors?`).toLowerCase();


let playerMove = 

// Computer Selection
let computerMove = Math.random();

if (computerMove <= 0.34){
    computerMove = `rock`;
}
else if (computerMove <= 0.67){
    computerMove = `paper`;
}
else{
    computerMove = `scissors`;
}

console.log(`You chose ${playerMove} and your opponent chose ${computerMove}.`);

//Play a round



function round(x,y){
   if(x === y){
        console.log(`It's a tie!`);
    }
    else if(x === 'rock' && y === `paper` || x === `paper` && y === `scissors` || x === 'scissors' && y === 'rock'){
        console.log(`You lose!`)
    }

    else(
        console.log(`You win!`)
    )
}
round(playerMove,computerMove);



