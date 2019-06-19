var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessNum = 10;
var userGuesses = [];
var guessesSoFarElem = document.getElementById("guessesSoFar");
var guessesLeftElem = document.getElementById("guessesLeft");
var winsElem = document.getElementById("wins");
var lossesElem = document.getElementById("losses");
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice);

document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === computerChoice) {
        wins++;
        guessNum = 10;
        userGuesses = [];
        lossesElem.textContent = "Losses: " + losses;
        guessesLeftElem.textContent = "Guesses Left: " + guessNum;
        winsElem.textContent = 'Wins: ' + wins;
        guessesSoFarElem.textContent = "Guesses So Far: -None-";
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice);
    } else {
        if (!userGuesses.includes(userGuess)) {
            guessNum--;
            userGuesses.push(userGuess);
            guessesLeftElem.textContent = "Guesses Left: " + guessNum;
            guessesSoFarElem.textContent = "Guesses So Far: " + userGuesses;
        }
    }
    if (guessNum == 0) {
        losses++;
        guessNum = 10;
        userGuesses = [];
        lossesElem.textContent = "Losses: " + losses;
        guessesLeftElem.textContent = "Guesses Left: " + guessNum;
        winsElem.textContent = 'Wins: ' + wins;
        guessesSoFarElem.textContent = "Guesses So Far: -None-";
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
}