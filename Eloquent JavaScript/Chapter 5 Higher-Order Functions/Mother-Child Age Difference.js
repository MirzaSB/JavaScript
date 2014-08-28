/**
 * Using the example data set from this chapter, compute the average age difference between mothers and children
 * (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.

 Note that not all the mothers mentioned in the data are themselves present in the array. The byName object,
 which makes it easy to find a person’s object from their name, might be useful here.

 function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
    }

 var byName = {};
 ancestry.forEach(function(person) {
    byName[person.name] = person;
    });

 // Your code here.

 // → 31.2
 */

//Get the data from the ancestry.js file
var ANCESTRY_FILE = require('./ancestry.js');
//Convert the imported data to JSON.
var ancestry = JSON.parse(ANCESTRY_FILE);


//Function to calculate the average value of an array.
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

//byName function.
var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

//Map function from the example.
function map(array, transform) {
    var mapped = [];
    for(var i = 0; i < array.length; i++) {
        mapped.push(transform(array[i]));
    }
    return mapped;
}

//Return all people whose "mother" values are also inside the ancestry JSON object.
var hasKnownMother = (ancestry.filter(function(person) {
    return byName[person.mother];
}));

//For all the people found above, calculate the age difference (different 'born' year values) between the mother and the child.
var ages = map(hasKnownMother, function(person) {
    return person.born - byName[person.mother].born;
});

console.log(average(ages));