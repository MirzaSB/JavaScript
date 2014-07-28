/**
 * Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with the array).
 * A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

 var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

 A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list}
 (with list referring to the variable defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. In addition,
 the original list is also still a valid three-element list.

 Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, and write a listToArray function that produces an array
 from a list. Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth,
 which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

 If you haven’t already, also write a recursive version of nth.

 // Your code here.

 console.log(arrayToList([10, 20]));
 // → {value: 10, rest: {value: 20, rest: null}}
 console.log(listToArray(arrayToList([10, 20, 30])));
 // → [10, 20, 30]
 console.log(prepend(10, prepend(20, null)));
 // → {value: 10, rest: {value: 20, rest: null}}
 console.log(nth(arrayToList([10, 20, 30]), 1));
 // → 20

 */

function arrayToList(arr) {
    var list = {value: arr[arr.length-1], rest: null};
    for(var i = arr.length-2; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }
    return list;
}

//Test vectors for the arrayToList function.
var vectors = [[1,2,3], [10, 20], [10,20,30]];
for(var i = 0; i < vectors.length; i++) {
    console.log();
    console.log("--------------------------------------------------------------");
    console.log("The arrayToList function's current test vector is: " + vectors[i]);
    console.log(arrayToList(vectors[i]));
    console.log("--------------------------------------------------------------");
    console.log();
}

function listToArray(list) {
    //Initialize an array.
    var arr = [];
    //Create a for loop that will go through all the elements in the list/node.
    for (var node = list; node; node = node.rest) {
        //Push the current "value" found.
        arr.push(node.value);
    }
    //Return the final array.
    return arr;
}

for(var i = 0; i < vectors.length; i++) {
    console.log();
    console.log("--------------------------------------------------------------");
    console.log("The listToArray function's current test vector is: " + vectors[i]);
    console.log(listToArray(arrayToList(vectors[i])));
    console.log("--------------------------------------------------------------");
    console.log();
}

function prepend(value, list) {
    //Return the final value in a "list" format.
    return {value: value,
            rest: list};
}
console.log();
console.log("--------------------------------------------------------------");
console.log("The prepend function's current test vector is: prepend(10, prepend(20, null))");
console.log(prepend(10, prepend(20, null)));
console.log("--------------------------------------------------------------");
console.log();

var list = {
    value: 10,
    rest: {
        value: 20,
        rest: {
            value: 30,
            rest: null
        }
    }
};

function nth(list, num) {
    //Initialize a variable that would keep track of the list indexes.
    var index = 0;
    //Create a for loop...
    for (var node = list; node; node = node.rest) {
        //If the list is at it's current index, return the node/list's current value.
        if(index == num) {
            return node.value;
        }
        //Increment the index variable.
        index++;
    }
    //Return undefined, if the index is not matched.
    return undefined;
}

console.log();
console.log("--------------------------------------------------------------");
console.log("The nth function's current test vector is: (arrayToList[10,20,30], 1)");
console.log("The output is: " + nth(arrayToList([10, 20, 30]), 1));
console.log("--------------------------------------------------------------");
console.log();
