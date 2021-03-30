import React, { useState, useEffect } from "react";
import axios from 'axios';
const App = () => {

  const [result, setResults] = useState([])

  useEffect(() => {
    const results = async () => {
      const { data } = await axios.get('https://swapi.dev/api/films/1/')
      setResults(data)
    }
    results()
  }, [])

  const displayMovie = () => {
    return (
      <>
        <h1>{result.title}</h1>
        <h2>{result.director}</h2>
      </>
    )

  }
  return (
    <div>
      {displayMovie()}
    </div>
  );

}

export default App;
