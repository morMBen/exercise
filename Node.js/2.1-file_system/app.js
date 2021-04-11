const fs = require('fs');
const myFile = '../2.1-file_system';
// fs.writeFileSync('notes.txt', 'This are my notes');

// fs.copyFileSync('notes.txt', 'newNotes.txt');

// fs.renameSync('newNotes.txt', 'theNewerNotes.txt');

fs.readdir(myFile, (err, data) => {
    data.forEach(file => {
        console.log(file);
    })
    if (err) throw console.log(err);
})
fs.mkdirSync('myNewDir')