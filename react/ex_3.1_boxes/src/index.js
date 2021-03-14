import React from 'react';
import ReactDOM from 'react-dom';
import Box4 from './Box4';

const App = () => {
    return (
        <div className="box1">
            <div className="box2">
                <div className="box3">
                    <Box4 />
                    <Box4 />
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)