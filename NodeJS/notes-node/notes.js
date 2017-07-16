const fs = require('fs');

const NOTES_DATA_FILE = 'notes-data.json';

var addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title, body
    };
    if (checkIfNoteExists(notes, title)) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var checkIfNoteExists = (notes, title) => {
    const duplicateNotes = notes.filter((note) => note.title === title);
    return duplicateNotes.length === 0;
};

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync(NOTES_DATA_FILE);
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

var getAllNotes = () => {
    return fetchNotes();
};

var getNote = (title) => {
    let allNotes = fetchNotes();
    let filteredNotes = allNotes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

var removeNote = (title) => {
    let allNotes = fetchNotes();
    let filteredNotes = allNotes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return allNotes.length !== filteredNotes.length;
};

var saveNotes = (notes) => {
    fs.writeFileSync(NOTES_DATA_FILE, JSON.stringify(notes));
};

module.exports = {
    addNote,
    checkIfNoteExists,
    getAllNotes,
    getNote,
    logNote,
    removeNote
};