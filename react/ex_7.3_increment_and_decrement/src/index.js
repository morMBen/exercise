import React from 'react';
import ReactDOM from 'react-dom';
import ButtonBox from './ButtonBox';


const App = () => {
    return (
        <ButtonBox />
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)