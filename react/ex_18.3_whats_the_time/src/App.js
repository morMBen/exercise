import React, { useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState('');
  const [minutes, setMinutes] = useState('');
  const [hours, setHours] = useState('');

  const setInput = (e) => {
    if (!isNaN(e.target.value)) {
      let temp = e.target.value;
      if (e.target.id === 'seconds') {
        temp = e.target.value;
      }
      else if (e.target.id === 'minutes') {
        temp = e.target.value * 60;
      }
      else {
        temp = e.target.value * 60 * 60;

      }
      setSeconds(temp);
      setMinutes(temp / 60)
      setHours(temp / 60 / 60)
    }
  }


  return (
    <div>
      <label>Seconds</label>
      <input
        id="seconds"
        value={seconds}
        onChange={setInput}
      ></input>
      <label>Minutes</label>
      <input
        id="minutes"
        value={minutes}
        onChange={setInput}
      ></input>
      <label>Hours</label>
      <input
        id="hours"
        value={hours}
        onChange={setInput}
      ></input>
    </div>
  );

}

export default App;
