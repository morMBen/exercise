const express = require('express');
const app = express();
const { loadMovies } = require('./utils.js')

const PORT = 3000;

// app.use(express.json())

app.get('/api/movies', (req, res) => {
    const moveis = loadMovies();
    res.status(200).json(moveis)
})


app.listen(PORT, () => {
    console.log("start listening...")
})

