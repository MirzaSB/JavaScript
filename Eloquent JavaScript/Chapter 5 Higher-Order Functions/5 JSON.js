var obj = {name: "X", born: 1980};
//Convert the above object to JSON.
var obj_json = JSON.stringify(obj);
console.log(obj_json);

//Convert the JSON instance back to a regular JS object.
var json_obj = JSON.parse(obj_json);
console.log(json_obj);

console.log(json_obj.born);

//Get the data from the ancestry.js file
var ANCESTRY_FILE = require('./ancestry.js');
//Convert the imported data to JSON.
var ancestry = JSON.parse(ANCESTRY_FILE);
//Print out the length of the JSON object.
console.log(ancestry.length);