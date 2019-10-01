// var tag = document.getElementById("highlight");

// tag.style.color = "blue"

// var h1 = document.querySelector("h1");

// h1.style.color = "yellow";
// h1.style.border = " 5px solid pink";

//The best way to use javascript to style your HTML is to define a class in CSS and then use JS to toggle that feature on and off. see the css file for the class definition!!

// .some-class {
//     color: blue;
//     border: 10px solid red;
// }
// above code is in the css file

// var tag = document.getElementById("highlight");
// //ADD THE NEW CLASS TO THE SELECTED ELEMENT
// tag.classList.add("some-class");

//classList- is a read-only list that contains the classes for a given element. It is not an array

//Define another calss in CSS
// .another-class {
//     color: purple;
//     font-size: 76px;
// }

// var tag = document.querySelector("h1");
// //ADD A CLASS TO THE SELECRED ELEMENT
// tag.classList.add("another-class");

// //REMOVE A CLASS
// tag.classList.remove("another-class");

// //TOGGLE A CLASS
// tag.classList.toggle("another-class");

// var p = document.querySelector("p");
// p.classList.toggle("big");


//textContent - returns a string of all the text contained in a given element. for example...
//<p>
    //This is an <strong>awesome</strong> paragraph
//</p>

//select the <p> tag:
//var tag = document.querySelector("p");

//Retrieve the textContent:
//tag.textContent //"This is an awesome paragraph"

//alter the textContent:
//tag.textContent = "blah blah blah";

//innerHTML- similar to textContent, except it returns a string of all the HTML contained in a given element

//<p>
    //This is an <strong>awesome</strong> paragraph
//</p>

//select the <p> tag:
//var tag = document.querySelector("p");

//tag.innerHTML
//"This is an <strong>awesome</strong> paragraph"


//Manipulatinbg Attributes!!!!
//use getAttribute() and setAttribute() to read and write attributes like src or href

// {/* <a href="www.google.com">I am a link</a>
// <img src="logo.png"></img> */}

//var link = document.querySelector("a");
//link.getAttribute("href");  //"www.google.com"
//CHANGE HREF ATTRIBUTE
//link.setAttribute("href", "www.dogs.com");

//TO CHANGE THE IMAGE SRC
//var img = document.querySelector("img");
//img.setAttribute("src", "corgi.png");
