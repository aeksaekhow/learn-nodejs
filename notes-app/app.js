//const chalk = require('chalk');
const yargs = require('yargs');
//const notes = require('./notes');

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

        console.log('Adding the new note. Title=' + argv.title + ', Body=' + argv.body);
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

        console.log('Listing all the notes')
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
