// function doMath() {
//     var x = 40;
//     console.log(x);
// }
// x is defined inside this function but outside of the function "x" is undefined.

//functions have their own scope. Outside of the function is considered the global scope. We can access the variable inside the function from the Global scope.


// in the example below we defined the variable "y" in the global scope. Then we declared a function doMoreMath() and when we execute the function is knows that "y" is defined as 99.
// var y = 99

// function doMoreMath() {
//     console.log(y);
// }

//Attention!!! if you redefine the value of a variable inside the function you will have changed its value in the global scope. To prevent this you must include the "var" identifier inside the function when defining a new value for the variable. This will keep the value inside the function's scope only.

//Evaluate:

// var num = 8;
// function doMath() {
//     num += 1;
//     if(num % 5 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// num += 1;
// doMath()

//the answer is: True
//this is because the variable is defined in the first line of code inside the global scope. Then the fucntion is declared but not ran yet. So the next piece to run is the last line if code "num += 1" this adds to num, then we call the function doMath() which executes the code, taking num from the global scope and adding 1, then running through the if statement and since num is 10 which is divisible by 5 it returns true.

//Also!!! Variables defined in functions are not accessible by other functions. Each function has its own scope.