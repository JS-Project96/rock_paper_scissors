// Game

let userScore = 0
let computerScore = 0

// get computers choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

function compareChoices(usersChoice, computersChoice, usersScore, computersScore) {
    if (usersChoice === computersChoice) {
        resultDiv.textContent = "Its a draw!";
    } else if (usersChoice === "rock" && computersChoice === "scissors"){
        userScore++;
        userScoreDiv.textContent = userScore;
        resultDiv.textContent = "Rock beats scissors! You win!";
    } else if (usersChoice === "scissors" && computersChoice === "rock"){
        computerScore++;
        computerScoreDiv.textContent = computerScore;
        resultDiv.textContent = "Rock beats scissors, computer wins!";
    } else if (usersChoice === "paper" && computersChoice === "scissors"){
        computerScore++;
        computerScoreDiv.textContent = computerScore;
        resultDiv.textContent = "Scissors beats paper, computer wins!";
    } else if (usersChoice === "scissors" && computersChoice === "paper"){
        userScore++;
        userScoreDiv.textContent = userScore;
        resultDiv.textContent = "Scissors beats paper, you win!";
    } else if (usersChoice === "rock" && computersChoice === "paper"){
        computerScore++;
        computerScoreDiv.textContent = computerScore;
        resultDiv.textContent = "Paper beats rock, computer wins!";
    } else if (usersChoice === "paper" && computersChoice === "rock") {
        userScore++;
        userScoreDiv.textContent = userScore;
        resultDiv.textContent = "Paper beats rock, you win!";
    };
};

// 1 round of RPS
function rockPaperScissors(usersChoice) {
    let computersChoice = getComputerChoice();
    let result = compareChoices(usersChoice, computersChoice);
    return result;
};

// UI

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultDiv = document.querySelector('.result');
const userScoreDiv = document.querySelector('.usersScore');
const computerScoreDiv = document.querySelector('.computersScore');

rock.addEventListener('click', () => {
    (rockPaperScissors("rock"));
});

paper.addEventListener('click', () => {
    (rockPaperScissors("paper"));
});

scissors.addEventListener('click', () => {
   (rockPaperScissors("scissors"));
});

