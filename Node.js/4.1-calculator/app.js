const chalk = require('chalk');
const { argv, demand } = require('yargs');
const yargs = require('yargs');


yargs.version('1.1.0');

yargs.command({
    command: 'calc',
    describe: 'add a new note',
    builder: {
        add: {
            describe: 'note title',
            type: 'array'
        },
        minus: {
            describe: 'note title',
            type: 'array'
        },
        multi: {
            describe: 'note title',
            type: 'array'
        },
        divid: {
            describe: 'note title',
            type: 'array'
        },
    },
    handler: function (argv) {
        let sol;
        if (argv.add) {
            sol = argv.add[0] + argv.add[1];
        } else if (argv.minus) {
            sol = argv.minus[0] - argv.minus[1];
        } else if (argv.multi) {
            sol = argv.multi[0] * argv.multi[1];
        } else if (argv.divid) {
            sol = argv.divid[0] / argv.divid[1];
        }
        console.log('title: ' + sol)
    }
})

yargs.parse()

