const btnLow = document.getElementById("Low");
const btnCorrect = document.getElementById("Correct");
const btnHigh = document.getElementById("High");

let lastGuess = 500;

btnLow.addEventListener("click", function () {
    GuessNumber("low");
});

btnHigh.addEventListener("click", function () {
    GuessNumber("high");
});

btnCorrect.addEventListener("click", GuessNumber("correct"));


var X = 1;
var Y = 1001;

var newGuess;


//var rd = Math.floor(Math.random() * lastGuess);

function GuessNumber(input) {
    
    if (input == "correct") {
        console.log("yesyesysy");
    }
    else if (input == "high" && lastGuess >= 500) {
        X = Y - lastGuess;
        newGuess = Math.floor(X / 2);
        lastGuess = lastGuess + newGuess;

        console.log(lastGuess);
    }


    else if (input == "low" && lastGuess > 500) {
        newGuess = Math.floor((lastGuess - 500) / 2);
        lastGuess = lastGuess - newGuess;
        

        console.log(lastGuess);
    }



    else if (input == "high" && lastGuess < 500) {
        lastGuess= Math.floor((lastGuess / 2) + lastGuess);


        console.log(lastGuess);
    }


    else if (input == "low" && lastGuess <= 500) {
        lastGuess = Math.floor(lastGuess / 2);

        console.log(lastGuess);
    }
    
    

}