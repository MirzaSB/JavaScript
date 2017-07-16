// var obj = {
//     name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// console.log(typeof obj);
// console.log(obj);

// var personString = '{"name": "Andrew", "age": 25}';
// var personObj = JSON.parse(personString);
//
// console.log(personObj);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
    body: 'Some body'
};

var originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);