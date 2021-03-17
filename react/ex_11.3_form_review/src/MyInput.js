import React from 'react';

class MyInput extends React.Component {

    render() {
        return (
            <div>
                <input id={this.props.setId} type={this.props.myType} value={this.props.val} onChange={this.props.change}></input>
            </div>
        )
    }

}

export default MyInput;