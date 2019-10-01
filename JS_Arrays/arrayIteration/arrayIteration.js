//Array Iteration
//use a for loop to iterate over an array
//use forEach to iterate over an array
//Compare and contrast for loops and forEach

//For Loop in Array Iteration
var colors = ["Red", "Orange", "Yellow", "Green"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//Method ForEach in Array Iteration
//arr-whatever the array is called.ForEach(someFunction);
var colors = ["Red", "Orange", "Yellow", "Green"];

colors.forEach(function(color) {
    //color is a placeholder, call it whatever you want
    console.log(color);
});

var numbers = [1,2,3,4,5,6,7,8,9,10];
for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 3 === 0){
       console.log(numbers[i]); 
    }
}