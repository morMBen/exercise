// import the react and the reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//     return 'Click on me!';
// }

const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!";
//Create a react component
const App = function () {
  return (
    <div>
      <h1>1) {data.join(' ')}</h1>
      <h1>2) {number1} + {number2} = {number1 + number2}</h1>
      <h1>3) The string length is {string.length}</h1>

    </div>
  );
}
//Take the react component and show it on the screan
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)