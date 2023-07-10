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
// compare computer and users choice
// declare the result
// ask user if they would like to play again