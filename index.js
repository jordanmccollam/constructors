// The file containing the logic for the course of the game, which depends on Word.js and:

    // Randomly selects a word and uses the Word constructor to store it
    // Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");
var Word = require("./word");

var words = [
    "programming",
    "node",
    "javascript",
    "hangman",
    "coding",
    "game"
];

var numberOfGuesses;
var randomWord;

inquirer.prompt({
    type: "confirm",
    message: "Do you want to play hangman?",
    name: "confirm"
}).then(answers => {
    if (answers.confirm === true) {
        setupGame();
        playGame();
    }
});

function playGame() {
    inquirer
    .prompt(
        {
            type: "input",
            message: "Guess a Letter!",
            name: "prompt"
        }
    ).then(answers => {

        if (answers.prompt.length === 1) {

            


        } else {
            console.log("Please only type one letter!");
        }
    })
}

function setupGame() {
    numberOfGuesses = 13;
    randomWord = words[Math.floor(Math.random()*words.length)];
    console.log("***The Word is = " + randomWord + "***");
    var newWord = new Word(randomWord);
    newWord.wordDisplay();
    console.log("You have " + numberOfGuesses + " guesses remaining");
}