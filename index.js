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

var randomWord = words[Math.floor(Math.random()*words.length)];
console.log("***The Word is = " + randomWord + "***");

var newWord = new Word(randomWord);

inquirer
    .prompt([
        
    ])
