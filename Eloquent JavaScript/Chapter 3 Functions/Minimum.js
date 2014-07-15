/**
 The previous chapter introduced the standard function Math.min that returns its smallest argument.
 We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

 // Your code here.

 console.log(min(0, 10));
 // → 0
 console.log(min(0, -10));
 // → -10

 */

function min(num1, num2) {
    if(num1 < num2) {
        return num1;
    }
    else if (num1 > num2) {
        return num2;
    }
    else {
        return "Both numbers are equal";
    }
}

console.log(min(0, 10));
console.log(min(0, -10));
