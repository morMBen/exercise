const express = require('express');
const send = require('send');
const app = express();
const {
    addNewMovie,
    loadMovies,
    findMovie,
    updateMovie,
    deleteMovie } = require('./utils.js')

const PORT = 5000;

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

app.get("/api/movies/:id", (req, res) => {
    // console.log(req.params.id);
    try {
        res.status(200).send(findMovie(req.params.id))
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

app.put("/api/movies/:id", (req, res) => {
    const { id } = req.params;
    const movie = req.body;
    try {
        res.status(200).send(updateMovie(id, movie))
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

app.delete("/api/movies/:id", (req, res) => {
    try {
        res.status(200).send(deleteMovie(req.params.id))
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

app.listen(PORT, () => {
    console.log("start listening...")
})

