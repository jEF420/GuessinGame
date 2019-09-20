const btnLow = document.getElementById("Low");
const btnCorrect = document.getElementById("Correct");
const btnHigh = document.getElementById("High");

btnLow.addEventListener("click", GuessNumber("low"));

btnHigh.addEventListener("click", GuessNumber("high"));

btnCorrect.addEventListener("click", GuessNumber("correct"));




let lastGuess = 500;

var rd = Math.floor(Math.random() * lastGuess);

function GuessNumber(input) {
    if (input == "correct") {

    }
    else if (input == "low") {

    }
    else if (input == "high") {

    }
}