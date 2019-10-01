//Function Declaration

// function doSomething() {
//     console.log("hello World");
// }

// function sayHello(name) {
//     console.log("Hello There " + name + "1");
// }

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice (1);
// }

//Function Expression

// var capitalize = function(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

//Function Problem Set

//1. isEven()

// function isEven(x) {
//     if( x % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isEven(num) {
//     return num % 2 === 0;
// }


//2. factorial()

function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for(var i = 2; i <= num; i++) {
        result = result * i; // or result *= i;
    }
    //return the result variable
    return result;
}
//factorial(4) 4 x 3 x 2 x 1 
//3. kebabToSnake()

function kebabToSnake(str) {
    //replace all "-" with "_"
    var myString = str.replace(/-/g, "_");
   //return variable
    return myString;
}