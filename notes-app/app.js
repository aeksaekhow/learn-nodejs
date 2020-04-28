//const chalk = require('chalk');
const notes = require('./notes');
const yargs = require('yargs');

yargs.version('2.0.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
              describe: 'Note title',
              demandOption: true,
              type: 'string'
          },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {

        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {

        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {

        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading  to specific note',
    handler() {

        console.log('Read the note')
    }
});

yargs.parse();
