import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props) {
        super(props);
        //THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = { counter: 0, fadfa: 5 };
    }
    count = () => {
        this.setState({ counter: this.state.counter + 1 })
        console.log(this.state.counter);
    }

    render() {
        return (
            <div>
                <button onClick={this.count}>Increment</button>
                <label>{this.state.counter}</label>
            </div>
        )
    };
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)