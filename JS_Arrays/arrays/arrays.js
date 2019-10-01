//Arrays are a type of Data Structure

//there are pre-defined methods for arrays (like push and pop)

//Examples of arrays[]

// var friends = ["Charlie", "Liz", "David", "Mattias"];

// console.log(friends[0]);
//you can change the value by selecting the index of the value and inputting a new value like...

// friends[0] = Chuck; //in this instance Charle becomes Chuck.

//you can add more values to the array.
// friends[4] = "Amelie"; //this will add Amelie to the end of the array.

// var colors = ["red", "orange", "yellow"];
// colors[3] = "green";
// colors[10] = "dark green";

//this last piece of code will show 6 undefined slots in the code because nothing is holding those values.

//we can initialize an empty array two ways:
// var friends = []; 
// var firends = new Array() //uncommon

//Arrays can hold any type of data
// var random_collection = [49. true, "Hermione", null];

//Arrays have a legnth proprerty
// var nums = [45, 37, 89,24];
// nums.length

//also to make sure you see the indexing of arrays[] 
// var dogs = ["Max", "Rusty", "Fido"];
// console.log(dogs.length);//this returns 3, 3 items.

// dogs[1] //returns Rusty, indexing starts at 0.

// var dog = rusty; 
// dog.legnth //returns 5, 5 characters
// dog[4] //returns "y" since indexing starts at 0

//Push and Pop
var colors = ["red", "orange", "yellow"];
colors[3] = "green"

//Push will add a value to the end of an array
colors.push("indigo");
//Pop will remove the last item in an array
colors.pop(); 
//unshift will add an item to the front of an array
colors.unshift("purple")
//use shift to remove the first item in an array
colors.shift()

//IndexOF
//indexOf()- use indexOf() to find the index of an item in an array
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];
//returns the first index at which a given element can be found.
friends.indexOf("David");//returns 2
friends.indexOf("Liz");// returns 1, not 4 
friends.indexOf("Hagrid"); //-1 is returned which indicates not argument is listed.

//Slice
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3rd fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);
//this does not alter the original fruits[] array
//citrus contains ['Orange', 'Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']

//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3]

//Nested Array or 2 dimensional Array
var friendGroups = [
    ["Harry", "Ron", "Hermoine"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wormtail", "Prongs"]
];
//what is the result of this line
console.log(friendGroups[2][0]);//returns "Mooney"