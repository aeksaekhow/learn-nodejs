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
    handler: function(argv) {

        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {

        console.log('Removing the note');
    }
});

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {

        const results = notes.getNotes();
        console.log(results);
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading  to specific note',
    handler: function() {

        console.log('Read the note')
    }
});

yargs.parse();
