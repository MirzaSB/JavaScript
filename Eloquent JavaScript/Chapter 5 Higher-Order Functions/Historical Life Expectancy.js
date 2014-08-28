/**
 * When we looked up all the people in our data set that lived more than ninety years, only the very latest generation in the data came out. Let’s take a closer look at that phenomenon.

 Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by a hundred,
 and rounding it up, as in Math.ceil(person.died / 100).

 function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

 // Your code here.

 // → 16: 43.5
 //   17: 51.2
 //   18: 52.8
 //   19: 54.8
 //   20: 84.7
 //   21: 94
 */

//Get the data from the ancestry.js file
var ANCESTRY_FILE = require('./ancestry.js');
//Convert the imported data to JSON.
var ancestry = JSON.parse(ANCESTRY_FILE);

function groupBy(arr, testFunction) {
    //Initialize an object.
    var groups = {};
    //Create a for each loop that goes through all elements in the array...
    arr.forEach(function(centuryOrYear) {
        //Initalize a potential group name.
        var name = testFunction(centuryOrYear);
        //If the group already exists in the groups.....
        if (name in groups)
            //Push the age to the appropriate group.
            groups[name].push(centuryOrYear);
        else
            groups[name] = [centuryOrYear];
    });
    return groups;
}

//Create groups by century using the above function.
var groupByCentury = groupBy(ancestry, function(person) {
    return Math.ceil(person.died / 100);
});

//Function that calculates averages.
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

//Write out all the averages of ages per century.
for (var num in groupByCentury) {
    var allAges = groupByCentury[num].map(function(person) {
        return person.died - person. born;
    });

    console.log(num + " : " + average(allAges).toFixed(1));
}
