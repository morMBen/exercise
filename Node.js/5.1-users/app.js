var uniqid = require('uniqid');
const yargs = require('yargs')
// const { damandOption } = require('yargs')
const users = require('./users.js')

yargs.version('1.1.0')

//create add commend
yargs.command({
    command: 'add',
    describe: 'Add new user',
    builder: {
        name: {
            describe: 'User name',
            damandOption: true,
            type: 'string'
        },
        email: {
            describe: 'User email',
            damandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        users.addNewUser(uniqid(), argv.name, argv.email)
    }
})

yargs.command({
    command: 'read',
    describe: 'Get user',
    builder: {
        id: {
            describe: 'userId',
            damandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        users.readUser(argv.id)
    }
})

yargs.command({
    command: 'update',
    describe: 'Update user',
    builder: {
        id: {
            describe: 'userId',
            damandOption: true,
            type: 'string'
        },
        name: {
            describe: 'User name',
            damandOption: true,
            type: 'string'
        },
        email: {
            describe: 'User email',
            damandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        users.updateUser(argv.id, argv.name, argv.email)
    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete user',
    builder: {
        id: {
            describe: 'userId',
            damandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        users.deleteUser(argv.id)
    }
})

yargs.parse()