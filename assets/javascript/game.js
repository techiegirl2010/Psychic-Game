var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessNum = [10];
var guessChoice = [];
var guessesSoFar = document.getElementById("Guesses-so-far");
var guessesLeft = document.getElementById("Guesses-left");
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)

document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === computerChoice) {
        wins++;
        guessesNum = 9;
        guessChoice = [];
        winsText.textContent = 'Wins: ' + wins;

    } else {
        if (guessChoice.includes(userGuess)) { } else {
            guessesNum--;
            guessChoice.push(userGuess);
            guessesLeft.textContent = "Guesses Left: " + guessesNum;
            guessesSoFar.textContent = "Guesses So Far: " + guessChoice;
        }
    }
    if (guessesNum == 0) {
        guessesNum++;
        losses++;
        guessChoice = [];
        losses.textContent = "Losses: " + losses;
    }
}