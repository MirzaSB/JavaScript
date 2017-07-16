const fs = require('fs');
const lodash = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

console.log(process.argv);

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of note',
        demand: true,
        alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = process.argv[2];

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    }
}
else if (command === 'list') {
    var allNotes = notes.getAllNotes();
    console.log(`Printing ${allNotes.length} note(s)...`);
    allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note === undefined) {
        console.log(`Note with the title, "${argv.title}" was not found.`);
    }
    else {
        console.log(`Note with the title, "${argv.title}" was found.`);
        notes.logNote(note);
    }
}
else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else {
    console.log('Command not recognized');
}
