// Game

let userScore = 0
let computerScore = 0

function checkScore() {
    if (userScore == 5){
        resultDiv.textContent = "You won the race to 5 points! Click an image to play again!";
        restartGame();
    } else if (computerScore == 5) {
        resultDiv.textContent = "Computer won the race to 5 points! Click an image to play again!";
        restartGame();
    };
};

function restartGame() {
    userScore = 0;
    computerScore = 0;
    userScoreDiv.textContent = `Your Score : ${userScore}`;
    computerScoreDiv.textContent = `Computers Score : ${computerScore}`;
};
// get computers choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

function compareChoices(usersChoice, computersChoice) {
    if (usersChoice === computersChoice) {
        resultDiv.textContent = "Its a draw!";
    } else if (usersChoice === "rock" && computersChoice === "scissors"){
        userScore++;
        userScoreDiv.textContent = `Your Score : ${userScore}`;
        resultDiv.textContent = "Rock beats scissors! You win!";
        checkScore();
    } else if (usersChoice === "scissors" && computersChoice === "rock"){
        computerScore++;
        computerScoreDiv.textContent = `Computers Score : ${computerScore}`;
        resultDiv.textContent = "Rock beats scissors, computer wins!";
        checkScore();
    } else if (usersChoice === "paper" && computersChoice === "scissors"){
        computerScore++;
        computerScoreDiv.textContent = `Computers Score : ${computerScore}`;
        resultDiv.textContent = "Scissors beats paper, computer wins!";
        checkScore();
    } else if (usersChoice === "scissors" && computersChoice === "paper"){
        userScore++;
        userScoreDiv.textContent = `Your Score : ${userScore}`;
        resultDiv.textContent = "Scissors beats paper, you win!";
        checkScore();
    } else if (usersChoice === "rock" && computersChoice === "paper"){
        computerScore++;
        computerScoreDiv.textContent = `Computers Score : ${computerScore}`;
        resultDiv.textContent = "Paper beats rock, computer wins!";
        checkScore();
    } else if (usersChoice === "paper" && computersChoice === "rock") {
        userScore++;
        userScoreDiv.textContent = `Your Score : ${userScore}`;
        resultDiv.textContent = "Paper beats rock, you win!";
        checkScore();
    };
};

// 1 round of RPS
function rockPaperScissors(usersChoice) {
    let computersChoice = getComputerChoice();
    let result = compareChoices(usersChoice, computersChoice);
    if (computersChoice == "rock"){
        computersChoiceDiv.textContent = "Computers choice: \u270A"
    } else if (computersChoice == "paper") {
        computersChoiceDiv.textContent = "Computers choice: \u270B"
    } else {
        computersChoiceDiv.textContent = "Computers choice: \u270C"
    };
    return result;
};

// UI

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultDiv = document.querySelector('.result');
const userScoreDiv = document.querySelector('.usersScore');
const computerScoreDiv = document.querySelector('.computersScore');
const usersChoiceDiv = document.querySelector('.usersChoice');
const computersChoiceDiv = document.querySelector('.computersChoice');

rock.addEventListener('click', () => {
    rockPaperScissors("rock");
    usersChoiceDiv.textContent = "Your choice: \u270A";
});

paper.addEventListener('click', () => {
    rockPaperScissors("paper");
    usersChoiceDiv.textContent = "Your choice: \u270B";
});

scissors.addEventListener('click', () => {
   rockPaperScissors("scissors");
   usersChoiceDiv.textContent = "Your choice: \u270C";
});

