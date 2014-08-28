//Write a function to log each value of an array in the console.
function logEach(array) {
    for(var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//Run the above function with a test vector.
var arr = [1,2,3,4,5];
logEach(arr);

console.log("-----------------------------------------------------------");

function forEach(array, action) {
    for(var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

//Run the above function with a test vector.
var arr2 = ["a",1,"b",2,"c", 3];
forEach(arr2, console.log);

console.log("-----------------------------------------------------------");

//Create a function on the spot instead.
var arr3 = [1,2,3,4,5];
var sum = 0;
forEach(arr3, function(number) {
    sum += number;
});
console.log(sum);

console.log("-----------------------------------------------------------");

