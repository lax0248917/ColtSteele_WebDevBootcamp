var obj = {
    name: " Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y) {
        return x + y;
    }
}

// to call the function 'add()', you need to specifiy the location.
obj.add(10,5);
//15
// an example would be 'console.log'
//we would build our own Methods because it cleans up code. 
//plus it helps to prevent namespace collision which simply means when two things have the same name. For example

//When I ask a dog to speak I get Woof, but when I ask a cat to speak I want Meow.

var dogSpace = {};

dogSpace.speak = function() {
    return "Woof!";
}

var catSpace = {};

catSpace.speak = function() {
    return "Meow";
}
dogSpace.speak();
//"Woof!"
catSpace.speak();
//"Meow"

//Keyword "This"
var comments = {};
comments.data ["Good Job!", "Bye", "Lame..."]

function print(arr) {
    arr.forEach(function(el) {
        console.log(el);
    });
}
print(comments.data),
//Good Job!
//Bye
//Lame...

//or

comments.print = function(arr) {
    this.data.forEach(function(el) {
        console.log(el);
    });
}

comments.print()
//Good Job!
//Bye
//Lame...
