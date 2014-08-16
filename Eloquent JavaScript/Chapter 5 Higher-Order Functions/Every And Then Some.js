/**
 * Arrays also come with the standard methods every and some. Both take a predicate function that, when called with an
 * array element as argument, returns true or false. Just like && only returns a true value when the expressions on both
 * sides are true, every only returns true when the predicate returned true for all elements of the array. Similarly, some
 * returns true as soon as the predicate returned true for any of the elements. They do not process more elements than
 * necessary—for example, if some finds that the predicate holds for the first element of the array, it will not look at
 * the values after that.

 Write two functions, every and some, that behave like these methods, except that they take the array as their first
 argument, rather than being a method.

 // Your code here.

 console.log(every([NaN, NaN, NaN], isNaN));
 // → true
 console.log(every([NaN, NaN, 4], isNaN));
 // → false
 console.log(some([NaN, 3, 4], isNaN));
 // → true
 console.log(some([2, 3, 4], isNaN));
 // → false
 */

function every(arr, predicateFunction) {

    //Create a for loop...
    for (var i = 0; i < arr.length; i++) {

        //If a false predicate is found, immediately return false.
        if(predicateFunction(arr[i]) != true) {
            return false;
        }
    }

    //Return true for all other cases.
    return true;
}

//Execute the "every" function for all test vectors.
console.log();
console.log("----------------------------------------------------------------------------------------------------------------");
console.log("The every function's first test vector is: " + "[NaN, NaN, NaN], isNaN)");
console.log("Output using the every function is: " + every([NaN, NaN, NaN], isNaN));
console.log("----------------------------------------------------------------------------------------------------------------");
console.log();

console.log("----------------------------------------------------------------------------------------------------------------");
console.log("The every function's second test vector is: " + "[NaN, NaN, 4], isNaN");
console.log("Output using the every function is: " + every([NaN, NaN, 4], isNaN));
console.log("----------------------------------------------------------------------------------------------------------------");
console.log();

function some(arr, predicateFunction) {

    //Create a for loop...
    for (var i = 0; i < arr.length; i++) {

        //If any true predicate is found, immediately return true. No need to run other cases as soon as one true is found.
        if(predicateFunction(arr[i]) == true) {
            return true;
        }
    }

    //Return false for all other cases.
    return false;
}

//Execute the "some" function for all test vectors.
console.log();
console.log("----------------------------------------------------------------------------------------------------------------");
console.log("The some function's first test vector is: " + "[NaN, 3, 4], isNaN)");
console.log("Output using the some function is: " + some([NaN, 3, 4], isNaN));
console.log("----------------------------------------------------------------------------------------------------------------");
console.log();

console.log("----------------------------------------------------------------------------------------------------------------");
console.log("The some function's second test vector is: " + "[2, 3, 4], isNaN");
console.log("Output using the some function is: " + some([2, 3, 4], isNaN));
console.log("----------------------------------------------------------------------------------------------------------------");
console.log();