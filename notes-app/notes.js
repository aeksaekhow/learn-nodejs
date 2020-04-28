const fs = require('fs');
const chalk = require('chalk');

const noteFileName = 'notes.json';

const getNotes = () => {

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

const addNote = (title, body) => {

    const notes = getNotes();
    const duplicatedNotes = notes.filter(note => note.title === title);

    if (duplicatedNotes.length !== 0) {
        console.log(chalk.red.bold.inverse('Note title taken!'))
        return;
    }

    notes.push({ title: title, body: body });

    const json = JSON.stringify(notes);
    fs.writeFileSync(noteFileName, json);

    console.log(chalk.green.bold.inverse('Note saved successfully'))
}

const removeNote = (title) => {

    const notes = getNotes();
    const newNotes = notes.filter(note => note.title !== title);

    if (notes.length === newNotes.length) {
        console.log(chalk.yellow.bold.inverse('Note title could not be found'))
        return;
    }

    const json = JSON.stringify(newNotes);
    fs.writeFileSync(noteFileName, json);

    console.log(chalk.green.bold.inverse('Note removed successfully'));
}

const listNotes = () => {

    console.log(chalk.inverse('Your Notes'))
    const notes = getNotes();
    notes.forEach(note => console.log('Title = ' + note.title + ', Body = ' + note.body))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}