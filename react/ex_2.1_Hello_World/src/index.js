// import the react and the reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//     return 'Click on me!';
// }
const setTitle = () => {
  document.title = 'AppleSeeds React App'
}
//Create a react component
const App = function () {
  return (<div>
    <b>{setTitle()}</b>
    <a htmlHref="#">Click me</a>
  </div >
  );
}
//Take the react component and show it on the screan
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)