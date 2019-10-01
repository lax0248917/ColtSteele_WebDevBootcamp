var age = prompt("How old are you?");

if(age < 0) {
    console.log("I'm sorry, but you can't be negative years old!!!!");
}

if(age % 2 != 0) {
    console.log("Your age is odd!!")
}

else if(age < 18) {
    console.log("Sorry, you are not old enough to enter the venue");
}

else if(age < 21) {
    console.log("You can enter, but cannot drink");
}

if(age === 21) {
    console.log("Happy 21st Brithday!!");
}

if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square");
}

else {
    console.log("Have a great time");
}
