//Events are everywhere
//clicking on a button 
//hovering over a link etc.

//The Process 
//We selece an element and then add an event listener

//"listen for a click on this <button>"
//Listen for a hover event on the <h1></h1>

//The Syntax 
//to add a listener, we use a method called addEventListener

//element.addEventListener(type, functionToCall);
// var button = document.querySelector("button");
// button.addEventListener("click", function() {
//   alert("SOMEONE CLICKED THE BUTTON!");
// });

var button = document.querySelector("button");
var paragraph = document.querySelector("p");
// // setup event listener

// button.addEventListener("click", function () {
//   paragraph.textContent = "Someone Clicked the Button";
// });

//or another way would be to declare a function beforehand and then
//pass that function into the event method. like below
function changeText() {
  paragraph.textContent = "Someone Clicked the Button!";
};
button.addEventListener("click", changeText);