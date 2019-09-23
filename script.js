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


var X = 1;
var Y = 1000;
let lastGuess = 500;
var newGuess;
showBox.innerHTML = "the computers guess is " + lastGuess;
//var rd = Math.floor(Math.random() * lastGuess);

function GuessNumber(input) {

    if (input == "correct") {
        console.log("yes");
        alert("Think of new number!\nReload the site!");

    } else if (input == "high" && lastGuess >= 500) {
        X = Y - lastGuess;
        newGuess = Math.round(X / 2);
        lastGuess = lastGuess + newGuess;
        showBox.innerHTML = "the computers guess is " + lastGuess;
        console.log(lastGuess);
    } else if (input == "low" && lastGuess > 500) {
        newGuess = Math.round((lastGuess - 500) / 2);
        lastGuess = lastGuess - newGuess;
        showBox.innerHTML = "the computers guess is " + lastGuess;
        console.log(lastGuess);
    } else if (input == "high" && lastGuess < 500) {
        lastGuess = Math.round((lastGuess / 2) + lastGuess);
        showBox.innerHTML = "the computers guess is " + lastGuess;
        console.log(lastGuess);
    } else if (input == "low" && lastGuess <= 500) {
        lastGuess = Math.round(lastGuess / 2);
        showBox.innerHTML = "the computers guess is " + lastGuess;
        console.log(lastGuess);
    }



}