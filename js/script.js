// get computers choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

// get users choice
function getUsersChoice() {
    let choice = prompt("Enter rock, paper or scissors: ").toLowerCase(); // to lower case makes comparison easier
    while (true) {
        if (choice === "rock" || choice === "paper" || choice === "scissors"){
            return choice;
        } else {
            choice = prompt("Please enter a valid input. rock, paper or scissors: ").toLowerCase();
        };
    };
};
// compare computer and users choice & declare result
function compareChoices(usersChoice, computersChoice) {
    if (usersChoice === computersChoice) {
        return "Its a draw!"
    } else if (usersChoice === "rock" && computersChoice === "scissors"){
        return "Rock beats scissors! You win!";
    } else if (usersChoice === "scissors" && getComputerChoice === "rock"){
        return "Rock beats scissors, computer wins!";
    } else if (usersChoice === "paper" && computersChoice === "scissors"){
        return "Scissors beats paper, computer wins!";
    } else if (usersChoice === "scissors" && computersChoice === "paper"){
        return "Scissors beats paper, you win!";
    } else if (usersChoice === "rock" && computersChoice === "paper"){
        return "Paper beats rock, computer wins!";
    } else if (usersChoice === "paper" && computersChoice === "rock") {
        return "Paper beats rock, you win!";
    };
};

// game put together
function rockPaperScissors() {
    let computersChoice = getComputerChoice();
    let usersChoice = getUsersChoice();
    let result = compareChoices(usersChoice, computersChoice);
    return result;
};

// ask the user if they want to play again
function playAgain() {
    while (true){
        let answer = prompt("Would you like to play again? enter 'y' or 'n': ").toLowerCase();
        console.log(answer);
        if (answer === "y") {
            console.log(rockPaperScissors());
        } else if (answer === "n") {
            break;
        } else {
            answer = prompt("Please enter a valid response. enter 'y' or 'n': ").toLowerCase();
        };
    };
};

// program put together

function mainGame() {
    console.log(rockPaperScissors());
    playAgain();
};