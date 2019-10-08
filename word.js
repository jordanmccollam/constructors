// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

    // An array of new Letter objects representing the letters of the underlying word
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require("./letter");

function Word(chosenWord) {
    this.chosenWord = chosenWord;
    this.chosenWordArr = [];

    chosenWord.split("").forEach(element => {
        this.chosenWordArr.push(new Letter(element));
    });

    this.wordDisplay = function() {
        var wordForDisplay = [];

        for (var i = 0; i < this.chosenWordArr.length; i++) {
            var letterStatus = this.chosenWordArr[i].letterDisplay();
            wordForDisplay.push(letterStatus);
        }
        // console.log(wordForDisplay.join(" "));
        return wordForDisplay.join(" ");
    }

    this.makeGuess = function(newGuess) {
        for (var i = 0; i < this.chosenWordArr.length; i++) {
            this.chosenWordArr[i].makeGuess(newGuess);
        }
    }
}

// var test = new Word("Hello");
// console.log(test.wordDisplay().indexOf("_"));

module.exports = Word;