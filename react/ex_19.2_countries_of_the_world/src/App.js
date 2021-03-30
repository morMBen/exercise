import React, { useState, useEffect } from "react";
import axios from 'axios';
import Input from './Input';
const App = () => {
  const [result, setResults] = useState([])
  const [tempRes, setTempRes] = useState([])
  const [input, setInput] = useState('');



  useEffect(() => {
    const results = async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all')
      setResults(data)
      setTempRes(data)
    }
    results()
  }, [])

  const displayMovie = () => {
    return (
      tempRes.map(r => {
        return (<React.Fragment key={r.numericCode}>
          <li >{r.name}</li>
        </React.Fragment>)
      })
    )
  }

  const filerCountrys = (textInput) => {
    const reg = new RegExp(`^${textInput}`)
    setTempRes(result.filter(e => {
      return reg.test(e.name.toLowerCase())
    }))
  }

  const onInputChange = (e) => {
    filerCountrys(e.target.value.toLowerCase())
    setInput(e.target.value)
  }

  return (
    <div>
      <label>Search</label>
      <Input
        onChange={onInputChange}
        inputValue={input} />
      <ul>
        {displayMovie()}
      </ul>
    </div>
  );

}

export default App;
