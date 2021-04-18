import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false)

  useEffect(() =>
    axios.get("/api/movies").then(res => {
      setMovies(res.data)
    })
    , [])


  return (
    <div className="App">
      <h1>Hello There</h1>
      <button onClick={() => setShow(true)}>click to get all movies</button>
      {show && movies.map((e, i) => {
        return <div key={i}>{e.title}</div>
      })}
    </div>
  );
}

export default App;
