var nums = [45,65,77,34];
nums.forEach(function(nums) {
    console.log(num);
});

function myForEach(arr, func) {
    //loop through array
    for(var i = 0 ; i < arr.length; i++) {
        //call func for each item in array
        func(arr[i]); 
    }
}
//this works when the whole code is written but to be able to right in the same syntax as arr.forEach(someFunction) we need to do the following below....

Array.prototype.myForEach = function(func) {
//"this" is a keyword that needs to be used
    for(var i = 0; i < this.length; i++) {
       func(this[i]); 
    }
}

//so now we can pass in the array and have the loop myForEach run on all of the items in the array and carry out a specified funtion. For example...

var friends = ["Mark", "Mandy", "Madison", "Zach"];

friends.myForEach(function(name) {
    console.log("I love " + name);
})

//"I love Mark"
//"I love Mandy"
//"I love Madison"
//"I love Zach"

