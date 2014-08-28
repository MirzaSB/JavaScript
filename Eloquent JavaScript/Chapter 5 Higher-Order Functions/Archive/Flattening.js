/**
 * Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has
 * all the elements of the input arrays.

 var arrays = [[1, 2, 3], [4, 5], [6]];
 // Your code here.
 // → [1, 2, 3, 4, 5, 6]

 */

var arrays = [[1, 2, 3], [4, 5], [6]];

function reduce(arrays) {
    //Initialize an empty array to store the final reduced array
    var arr = [];
    //Create a for loop...
    for (var i = 0; i < arrays.length; i++) {
        //Concatenate the current array and the reduced array.
        arr = arr.concat(arrays[i]);
    }
    //Return the final reduced array.
    return arr;
}

console.log("----------------------------------------------------------------------------------------------------------------");
console.log("The reduce function's first test vector is: " + "[[1, 2, 3], [4, 5], [6]]");
console.log("Output using the reduce function is: " + reduce(arrays));
console.log("----------------------------------------------------------------------------------------------------------------");
console.log();