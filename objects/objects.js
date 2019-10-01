//Object usecase
//suppose I wanted to model a single person: name, age, and city

//I could use an array like this:
var person = ["Cindy", 32, "Lansing"];

//to retrieve the person's hometown:
person[2] //this is not very meaningful code

//what if I accidentally reversed the order?
var person2 = ["Travis", "Los Angeles", 21];

    //this is a perfect use case for an OBJECT

var person = {
    name: "Cindy"
    age: 32,
    city: "Lansing"
};

//Objects store data in key-value pairs
// note unlike arrays, objects have no order 

//Retrieving Data 
var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};
//bracket notation, similar to arrays:
console.log(person["name"]);  //Travis
//dot notation:
console.log(person.name);  //Travis

//you cannot use dot notation if the property starts with a number 
someObject.1blah    //invalid
someObject["1blah"] //Valid!

//you can lookup using a variable with bracket notation
var str = "name";
someObject.str //doesn't look for "name"
someObject[str] // does evaluate str and looks for "name"

//You cannot use dot notation for property names with spaces
someObject.fav color   //invalid
someObject["fav color"]; //valid!

//Updating Data
//Just like an array: access a propery and reassign it

var person = {
    name: "Travis",
    age: 21,
    city: "LA"
};
//to update age
person["age"] += 1;
//to update city
person.city = "London";

//make an empty object and then add to it
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";

//Or all at once (Object literal notation)
var person = {
    name: "Travis",
    age: 21,
    cith: "LA",
};

//Another way of intializing an Object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";

//Objects can hold all sorts of data
// numbers, strings booleans, arrays, and even other objects

//Difference between ARRAYS and OBJECTS

//********ARRAYS*********/
var dogs = ["Rusty", "Lucky", "Bubba"];
//dogs
//["Rusty", "Lucky", "Bubba"]

//to retrieve data
dogs[1];
//"Lucky"

//How to add into an Array
dogs.push("Wyatt")
//dogs
//["Rusty", "Lucky", "Bubba", "Wyatt"]

//to change the value in an Array
dogs[1]
//"Lucky"
dogs[1] = "Lucy"
//"Lucy"

//keys in arrays are always numbes and always in order 


//**********OBJECTS**********/
var dog = {
    name: "Bubba",
    breed: "Lab",
}
//dog
//object {name: "Bubba", breed: "Lab"}

//to retrieve data
dog["name"]
//"Bubba"
dog.name
//"Bubba"

//How to add into a Object
dog["age"] = 6
dog.age = 6
//Object {name: "Bubba", breed: "Lab", age: 6}

//How to change the value in an Object
dog.breed = " Black Lab"
//dog
//Object {name: "Bubba", breed: "Black Lab", age: 6}

//keys in onjects are arbitrary 