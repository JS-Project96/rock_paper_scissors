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
    }
};
// ask user if they would like to play again

// game put together