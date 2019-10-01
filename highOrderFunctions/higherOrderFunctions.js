function sing() {
    console.log("Twinkle Twinkle...");
    console.log("How I wonder...");
}

//setInterval(anotherFunc, interval in miliseconds)
//setInterval() is a higher order function where we can pass another function into it. 
//setInterval(sing, 1000);

//if you are only going to be executing the function in the instance of setInterval() you can write said function inside the higher order function as follows...

// setInterval(function(){
//   console.log("I am an anonymous function!");
//   console.log("THIS IS AWESOME!");  
// }, 2000);