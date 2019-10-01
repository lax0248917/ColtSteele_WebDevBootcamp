//printReverse()
//printReverse([1,2,3,4]);
//4
//3
//2
//1
//printReverse(["a", "b", "c"]);
//"c"
//"b"
//"a"
var num = [1,2,3,4];
function printReverse(arr) {
    for(var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
//isUniform()
//isUniform([1,1,1,1]);    //true
//isUniform([2,1,1,1]);    //false
function isUniform(arr) {
    var newArray = arr[0];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== newArray) {
            return false;
        }
    }
    return true;
}

//sumArray
//sumArray([1,2,3]);   //6
//sumArray([10,3,10,4]);  //27
function sumArray(arr) {
    var result = 0;
    arr.forEach(function (sum) {
        result += sum;
    });
    return result;   
}


//max()
//max([1,2,3]);   //3
//max([10,3,10,4]);  //10
function max(arr) {
    var result = arr[0];
    for(var i = 1; i < arr.length; i++){
    if(arr[i] > result) {
        result = arr[i];
        }
    }
return result;
}
