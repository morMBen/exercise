import React, { useState } from "react";

const App = () => {

  const arr = ["one", "two", "three", "four", "five"];

  const [tempArr, setTempArr] = useState(arr.map(e => { return { name: e, isCheckd: false } }))

  const setCheckBoxs = () => {
    return tempArr.map((e, index) => {
      return (
        <div>
          <label>{e.name}</label>
          <input
            type="checkbox"
            checked={e.isCheckd}
            onChange={() => {
              setTempArr(tempArr.map((el, i) => {
                if (i === index) {
                  return { name: el.name, isCheckd: !el.isCheckd }
                }
                else { return el }
              }))
            }}
          ></input>
        </div >
      )
    })
  }

  const deleteItems = () => {
    setTempArr(tempArr.filter((e) => {
      return e.isCheckd === false;
    }))
  }
  const reset = () => {
    setTempArr(arr.map(e => { return { name: e, isCheckd: false } }))
  }

  return (
    <div>
      <button onClick={deleteItems}>Delete</button>
      <button onClick={reset}>Reset</button>
      {setCheckBoxs()}
    </div>
  );

}

export default App;
