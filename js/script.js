// get computers choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = Math.floor(Math.random() * 3);
    return choices[choice]
};
// get users choice
// compare computer and users choice
// declare the result
// ask user if they would like to play again