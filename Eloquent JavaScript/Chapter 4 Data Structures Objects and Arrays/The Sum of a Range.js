/**
 * The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

 console.log(sum(range(1, 10)));
 Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

 Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

 As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array
 elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative
 step values so that range(5, 2, -1) produces [5, 4, 3, 2].

 // Your code here.

 console.log(sum(range(1, 10)));
 // → 55
 console.log(range(5, 2, -1));
 // → [5, 4, 3, 2]

 */


//First range function.
function range(start, end) {
    //Initialize an array.
    var numArr = [];
    //Create a for loop, that will go through all the numbers between "start" and "end".
    for(var i = start; i <= end; i++) {
        //Push the value into an array.
        numArr.push(i);
    }
    //Return the array.
    return numArr;
}

//The "sum" function.
function sum(arrNum) {
    //Initialize a variable to store the sum.
    var sum = 0;
    //Create a for loop that will go through all the elements in the array.
    for(var i = 0; i < arrNum.length; i++) {
        //Add the two numbers, and store the value in the "sum" variable.
        sum += arrNum[i];
    }
    //Return the final calculated value.
    return sum;
}

//The second range function that utilizes a "step" variable.
function range2(start, end, step) {
    //Initialize an array.
    var numArr = [];

    //Initialize a counter variable.
    var i = 0;

    if(step == null || step == 0) {
        step = 1;
    }

    //Check to see if the "step" value is negative. If it is not a negative number, use the other loop.
    if(step < 0) {
        //Create a for loop, that will go through all the numbers between "start" and "end". The numbers will be going down in this loop.
        for(i = start; i >= end; i = i + step) {
            //Push the value into an array.
            numArr.push(i);
        }
    }
    else {
        //Create a for loop, that will go through all the numbers between "start" and "end".
        for(i = start; i <= end; i = i + step) {
            //Push the value into an array.
            numArr.push(i);
        }
    }

    //Return the array.
    return numArr;
}

//Test vector for the first range function.
console.log();
console.log("--------------------------------------------------------------");
console.log("The first range function's test vector is: " + [1, 10]);
console.log("Output using the first range function: " + range(1, 10));

//Test vector for the sum function.
console.log("--------------------------------------------------------------");
console.log();
console.log("--------------------------------------------------------------");
console.log("The sum function's test vector is: " + range(1, 10));
console.log("Output using the sum function: " + sum(range(1, 10)));
console.log("--------------------------------------------------------------");

//Test vector for the second range function.
console.log();
console.log("--------------------------------------------------------------");
console.log("The second range function's first test vector is: " + [1, 10, 2]);
console.log("Output using the second range function: " + range2(1, 10, 2));
console.log("The second range function's second test vector is: " + [5, 2, -1]);
console.log("Output using the second range function: " + range2(5, 2, -1));
console.log("--------------------------------------------------------------");