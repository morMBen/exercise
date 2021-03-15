import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';

const App = () => {
  return (
    <div>
      <Buttons button="Important" fontWeight="bold" />
      <Buttons button="Not Important" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)