import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import Input from './Input';
import Button from './Button'
const App = () => {
  const [result, setResults] = useState([])
  const [term, setTerm] = useState('hooks')
  const [input, setInput] = useState('hooks');
  const [message, setMessage] = useState('');


  useEffect(() => {
    setMessage('loading')
    const results = async () => {
      try {
        const { data } = await axios.get('https://hn.algolia.com/api/v1/search', {
          params: {
            query: term
          }
        })
        console.log(data.hits)
        console.log(term)
        // console.log(data.hits)
        setResults(data.hits)
        setMessage('')
      } catch (err) {
        console.log(err)
        setMessage(`${err}`)
      }
    }
    results()
  }, [term])

  const displayItems = () => {
    if (result.length > 0) {
      return result.map(e => {
        return (
          <Fragment key={e.created_at_i}>
            <li>{e.title}</li>
          </Fragment>
        )
      })
    }
  }

  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const onClickSearch = () => {
    setTerm(input);
  }

  return (
    <div>
      <Input
        onChange={onInputChange}
        inputValue={input} />
      <Button onClickSearch={onClickSearch} />
      {message}
      <ul>
        {displayItems()}
      </ul>
    </div>
  );

}

export default App;
