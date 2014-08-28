function reduce2(array, combine, start) {
    var current = start;
    for(var i = 0; i < array.length; i++) {
        current = combine(current, array[i]);
    }
    return current;
}

console.log(reduce2([1,2,3,4], function(a,b) {
    return a + b;
}, 0));

//Get the data from the ancestry.js file
var ANCESTRY_FILE = require('./ancestry.js');
//Convert the imported data to JSON.
var ancestry = JSON.parse(ANCESTRY_FILE);

console.log(ancestry.reduce(function(min,cur) {
    if(cur.born < min.born) {
        return cur;
    }
    else {
        return min;
    }
}));