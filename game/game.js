var secretNumber = 10;

var guess = prompt("Guess a number!");

if(guess < secretNumber) {
    alert("That's to low!!");
}

else if(guess > secretNumber) {
    alert("That's to high!!");
}

else {
    alert("You Guessed It!!!");
}


