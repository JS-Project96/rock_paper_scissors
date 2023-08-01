
let usersScore = 0
let computersScore = 0

// get computers choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

function compareChoices(usersChoice, computersChoice, usersScore, computersScore) {
    if (usersChoice === computersChoice) {
        return "Its a draw!"
    } else if (usersChoice === "rock" && computersChoice === "scissors"){
        usersScore++;
        return "Rock beats scissors! You win!";
    } else if (usersChoice === "scissors" && computersChoice === "rock"){
        computersScore++;
        return "Rock beats scissors, computer wins!";
    } else if (usersChoice === "paper" && computersChoice === "scissors"){
        computersScore++;
        return "Scissors beats paper, computer wins!";
    } else if (usersChoice === "scissors" && computersChoice === "paper"){
        usersScore++;
        return "Scissors beats paper, you win!";
    } else if (usersChoice === "rock" && computersChoice === "paper"){
        computersScore++;
        return "Paper beats rock, computer wins!";
    } else if (usersChoice === "paper" && computersChoice === "rock") {
        usersScore++;
        return "Paper beats rock, you win!";
    };
};

// 1 round of RPS
function rockPaperScissors(usersChoice) {
    let computersChoice = getComputerChoice();
    let result = compareChoices(usersChoice, computersChoice);
    return result;
};

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.addEventListener('click', () => {
    console.log(rockPaperScissors("rock"));
});

paper.addEventListener('click', () => {
    console.log(rockPaperScissors("paper"));
});

scissors.addEventListener('click', () => {
   console.log(rockPaperScissors("scissors"));
});