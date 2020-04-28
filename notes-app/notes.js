const fs = require('fs');
const chalk = require('chalk');

const noteFileName = 'notes.json';

const getNotes = function() {

    // If the file did not exist, then return empty note array
    if (!fs.existsSync(noteFileName)) return [];

    const json = fs.readFileSync(noteFileName).toString();

    // If json is null or empty, that means nothing note added before
    if (!json) return [];

    const notes = JSON.parse(json);

    // If the notes variable is undefined or null, then return empty array instead
    if (!notes) return [];

    return notes;
}

const addNote = function(title, body) {

    const notes = getNotes();
    const duplicatedNotes = notes.filter(function(note) {
        return note.title === title;
    });

    if (duplicatedNotes.length !== 0) {
        console.log(chalk.red.bold.inverse('Note title taken!'))
        return;
    }

    notes.push({ title: title, body: body });

    const json = JSON.stringify(notes);
    fs.writeFileSync(noteFileName, json);

    console.log(chalk.green.bold.inverse('Note saved successfully'))
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};