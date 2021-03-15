import React from 'react';

class ButtonBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
    }
    inc = () => {
        if (this.state.count < 10) {
            this.setState({ count: this.state.count + 1 })
        }

    }
    dec = () => {
        if (this.state.count > -10) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    render() {
        return (
            <div className="box">
                <button onClick={this.inc}>Increment</button>
                <button onClick={this.dec}>Decrement</button>
                <label>{this.state.count}</label>
                {this.state.count > 0 ? <div className="bigger"></div> : this.state.count < 0 ? <div className="smaller"></div> : <div className="equal"></div>}
            </div>

        )
    };
}

export default ButtonBox;