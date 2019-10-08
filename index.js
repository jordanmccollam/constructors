// The file containing the logic for the course of the game, which depends on Word.js and:

    // Randomly selects a word and uses the Word constructor to store it
    // Prompts the user for each guess and keeps track of the user's remaining guesses

var Word = require("./word");
var inquirer = require("inquirer");

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
var newWord;
var correctGuesses;

prompt();
function prompt() {
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
}

function playGame() {
    if (newWord.wordDisplay().indexOf("_") > -1) {

        console.log("\n" + numberOfGuesses + " guesses remaining!!!\n");
        console.log(newWord.wordDisplay());
        console.log("\n");

        inquirer
        .prompt(
            {
                type: "input",
                message: "Guess a Letter!",
                name: "guess"
            }
        ).then(answers => {

            if (answers.guess.length === 1) {

                numberOfGuesses--;
                newWord.makeGuess(answers.guess);
            
                
                if (numberOfGuesses < 0) {
                    console.log("\nGAME OVER! \nRan out of guesses!");
                    prompt();
                } else {
                    playGame();
                };

            } else {
                console.log("Please only type one letter!");
            }
        })
    } else {
        console.log("\nYOU WON! \nThe Word Was " + randomWord);
        prompt();
    }
}


function setupGame() {
    numberOfGuesses = 13;
    correctGuesses = 0;
    randomWord = words[Math.floor(Math.random()*words.length)];
    newWord = new Word(randomWord);
}