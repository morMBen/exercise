const uniqId = require('uniqid')
const fs = require('fs');

const loadMovies = () => {
    try {
        const dataBuffer = fs.readFileSync('./db/movies.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return [];
    }
}

// console.log(uniqId())

module.exports = {
    loadMovies,
}