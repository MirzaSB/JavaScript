/**
 Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and
 reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second,
 reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements.

 Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more
 efficient?

 // Your code here.

 console.log(reverseArray(["A", "B", "C"]));
 // → ["C", "B", "A"];
 var arrayValue = [1, 2, 3, 4, 5];
 reverseArrayInPlace(arrayValue);
 console.log(arrayValue);
 // → [5, 4, 3, 2, 1]

*/

function reverseArray(arr) {
    var newArr = [];
    for(var i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

//Test vector for the reverseArray function.
console.log();
console.log("--------------------------------------------------------------");
console.log("The reverseArray function's test vector is: " + ["A", "B", "C"]);
console.log("Output using the reverseArray function is: " + reverseArray(["A", "B", "C"]));
console.log("--------------------------------------------------------------");
console.log();

function reverseArrayInPlace(arr) {
    //Create a for loop that will go through half the length of the array.
    for(var i = 0; i < Math.floor(arr.length/2); i++) {
        //Swap the current element with the corresponding position at the end. For example, first element will be swapped with the last element.
        //The second element will be swapped with the second last element, and so on...
        swapArrayElements(arr, arr[i], arr[arr.length-1-i]);
    }
    //Return this computed array.
    return arr;
    function swapArrayElements(arr, x, y) {
        //Get the index of the x and y.
        var xIndex = arr.indexOf(x);
        var yIndex = arr.indexOf(y);
        //Replace the first indexed element with the second indexed element in the array.
        arr.splice(xIndex, 1, y);
        //Replace the second indexed element with the first indexed element in the array.
        arr.splice(yIndex, 1, x);
        //Return the final array.
        return arr;
    }
}

//Test vector for the reverseArray function.
console.log();
console.log("--------------------------------------------------------------");
console.log("The reverseArrayInPlace function's test vector is: " + [1,2,3,4,5]);
console.log("Output using the reverseArrayInPlace function is: " + reverseArrayInPlace([1,2,3,4,5]));
console.log("--------------------------------------------------------------");
console.log();


