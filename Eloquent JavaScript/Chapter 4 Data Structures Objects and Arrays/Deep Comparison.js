/**
 * The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties.

 Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when
 compared with a recursive call to deepEqual.

 To find out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. If it produces
 "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".

 // Your code here.

 var obj = {here: {is: "an"}, object: 2};
 console.log(deepEqual(obj, obj));
 // → true
 console.log(deepEqual(obj, {here: 1, object: 2}));
 // → false
 console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
 // → true
 */

function deepEqual(val1, val2) {
    //Check to see if both the arguments are objects, and are not null. If not, test for string values.
    if((typeof val1 == "object" && val1 != null) && (typeof val2 == "object" && val2 != null))  {
        //Check whether both objects have the equal number of properties.
        if(!(Object.getOwnPropertyNames(val1).length==Object.getOwnPropertyNames(val2).length)) {
            return false;
        }
        //Create a for loop to go through all the properties in the object.
        for(var propName in val1) {
            //If property value of the first object is not the same as the property value of the second object, return false.
            if(!(val1[propName].toString == val2[propName].toString)) {
                return false;
            }
        }
        //All other cases, return true.
        return true;
    }
    else {
        //Compare the two string values, return true if same, false otherwise.
        return val1 == val2 ? true : false;
    }
}

//Test vectors.
var obj = {here: {is: "an"}, object: 2};

console.log();
console.log("----------------------------------------------------------------------------------------------------------------");
console.log("The deepEqual function's test vector's first object is: " + "obj = {here: {is: \"an\"}, object: 2}");
console.log("The deepEqual function's test vector's second object is: " + "obj");
console.log("Output using the deepEqual function is: " + deepEqual(obj, obj));
console.log("----------------------------------------------------------------------------------------------------------------");
console.log();

console.log("----------------------------------------------------------------------------------------------------------------");
console.log("The deepEqual function's test vector's first object is: " + "obj");
console.log("The deepEqual function's test vector's second object is: " + "{here: {is: \"1\"}, object: 2}");
console.log("Output using the deepEqual function is: " + deepEqual(obj, {here: 1, object: 2}));
console.log("----------------------------------------------------------------------------------------------------------------");
console.log();

console.log("----------------------------------------------------------------------------------------------------------------");
console.log("The deepEqual function's test vector's first object is: " + "obj");
console.log("The deepEqual function's test vector's second object is: " + "{here: {is: \"an\"}, object: 2}");
console.log("Output using the deepEqual function is: " + deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log("----------------------------------------------------------------------------------------------------------------");
console.log();