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

const findMovie = (id) => {
    const movies = loadMovies();
    const findDuplicate = movies.find(m => m.id === id);
    if (findDuplicate) {
        return findDuplicate;
    } else {
        throw new Error("The movie is all ready on the database")
    }
}

const saveMovies = (movies) => {
    // console.log(movies)
    const dataJSON = JSON.stringify(movies);
    fs.writeFileSync('./db/movies.json', dataJSON);
}

const updateMovie = (id, movie) => {
    const movies = loadMovies();
    const index = movies.findIndex(m => m.id === id);
    console.log(index)
    if (index !== -1) {
        const splicedArr = movies.splice(index, 1);
        movies.push({
            id: id,
            title: movie.title,
            ganre: movie.ganre,
            length: movie.length
        });
        saveMovies(movies);
    } else {
        throw new Error("The movie is not exist canot update!")
    }
}
const deleteMovie = (id) => {
    const movies = loadMovies();
    const index = movies.findIndex(m => m.id === id);
    if (index !== -1) {
        const splicedArr = movies.splice(index, 1);
        saveMovies(movies);
    } else {
        throw new Error("The movie is not exist canot delete!")
    }
}

module.exports = {
    loadMovies,
    addNewMovie,
    findMovie,
    updateMovie,
    deleteMovie
}