import React from 'react';

class ButtonBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { status: true };
    }
    count = () => {
        this.setState({ status: !this.state.status })
    }

    render() {
        return (
            <div className="box">
                <button onClick={this.count}>Show/Hide</button>
                {this.state.status ? <div className="inline_box"></div> : <div></div>}
            </div>

        )
    };
}

export default ButtonBox;