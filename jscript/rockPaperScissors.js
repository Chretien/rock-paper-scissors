let userScore = 0;
let computerScore = 0;

//DOM variables (We are grabbing all elements we want to manipulate from our HTML)
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



//computer choice

function computerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
    
}

console.log(computerChoice());

function convertToWord(letter){
    if (letter === 'r') {
        return "Rock";
    }
    if (letter === 'p'){
        return "Paper";
    }
    return "Scissors";
}

//Win function
function win(user,computer){
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `You chose ` + convertToWord(user) + `. The computer chose ` + convertToWord(computer) + `. You win!`;

}
//Lose function
function lose(user,computer){
computerScore++;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `You chose ` +  convertToWord(user) + `. The computer chose ` + convertToWord(computer) + `. You lose!`;
}

function draw(user,computer){
result_p.innerHTML = `It's a draw! Try again.`
}

//User Choice
function game(userChoice) {
    const compChoice = computerChoice();
    
    switch (userChoice + compChoice) {

    case "rs":
    case "pr":
    case "sp":
        win(userChoice, compChoice);
        break;
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;

    }
}

//Event Listeners!

function main(){
rock_div.addEventListener(`click`, function(){
    game("r");
});

paper_div.addEventListener(`click`, function(){
    game("p");
});

scissors_div.addEventListener(`click`, function(){
    game("s");
});

};

main();
