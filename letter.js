// This file will contain a constructor (Letter). Letter will display an underlying character or blank placeholder     depending on whether or not the user has guessed a letter. 

// Constructor should define...
    // String value to store the underlying character for the letter
    // A boolean that stores whether the letter has been guessed
    // Function that returns the character if guessed, or placeholder if not guessed
    // Function that takes a char at an argument and checks it against the underlying char, updating the boolean

function Letter(value) {
    this.value = value;
    guessed = false;

    this.letterDisplay = function() {
        var placeholder = "_"

        if (this.guessed === true) {
            return this.value;
        } else {
            return placeholder;
        }
    }

    this.makeGuess = function(newGuess) {
        if (this.value === newGuess) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;