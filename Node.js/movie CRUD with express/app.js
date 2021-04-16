const express = require('express');
const app = express();
const { addNewMovie, loadMovies } = require('./utils.js')

const PORT = 3000;

app.use(express.json())

app.get('/api/movies', (req, res) => {
    const moveis = loadMovies();
    res.status(200).json(moveis)
})

app.post("/api/movies", (req, res) => {
    try {
        const createMovie = addNewMovie(req.body)
        res.status(201).send(createMovie)
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})


app.listen(PORT, () => {
    console.log("start listening...")
})

