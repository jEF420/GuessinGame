const btnLow = document.getElementById("Low");
const btnCorrect = document.getElementById("Correct");
const btnHigh = document.getElementById("High");
const showBox = document.getElementById("showNr");


btnLow.addEventListener("click", function() {
    GuessNumber("low");
});

btnHigh.addEventListener("click", function() {
    GuessNumber("high");
});

btnCorrect.addEventListener("click", function() {
    GuessNumber("correct")
});


let i = 0;
let lastGuess = 500;
var newGuess = 250;
showBox.innerHTML = "the computers guess is " + lastGuess;


function GuessNumber(input) {

    if (i == 10) {
        showBox.innerHTML = "Max guesses reached";
        alert("You dont have a number \n Please think of a new number and try again!");
        lastGuess = 500;
        newGuess = 250;
        i = 0;
    } else if (input == "low") {
        lastGuess = Math.round(lastGuess -= newGuess);
        Math.round(newGuess /= 2);
        showBox.innerHTML = "the computers guess is " + Math.round(lastGuess);
        console.log(lastGuess);
        i++;
    } else if (input == "high") {
        lastGuess = Math.round(lastGuess += newGuess);
        Math.round(newGuess /= 2);
        showBox.innerHTML = "the computers guess is " + Math.round(lastGuess);
        console.log(lastGuess);
        i++;
    } else if (input == "correct") {
        showBox.innerHTML = "the computers guess is correct";
        lastGuess = 500;
        newGuess = 250;
        i = 0;
    }



}