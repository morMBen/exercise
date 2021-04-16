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
const addNewMovie = (movie) => {
    const movies = loadMovies();
    const findDuplicate = movies.find(m => m.id === movie.id);
    console.log(findDuplicate)
    if (findDuplicate === undefined) {
        movies.push(movie);
        saveMovies(movies);
    } else {
        throw new Error("The movie is all ready on the database")
    }
}

const saveMovies = (movies) => {
    console.log(movies)
    const dataJSON = JSON.stringify(movies);
    fs.writeFileSync('./db/movies.json', dataJSON);
}
// console.log(uniqId())

module.exports = {
    loadMovies,
    addNewMovie,
}