import React from "react";

class CustomCheackBox extends React.Component {
    state = {
        status: this.props.onDefault
    }


    setBoxes = (e) => {
        this.setState({ status: !this.state.status }, () => { console.log(this.state.status) });
        ;
    }

    render() {
        return (
            <div>
                <input type="checkbox"
                    checked={this.state.status}
                    onChange={this.setBoxes}
                />
                <label>{this.props.title}</label>
            </div>
        )
    }
}

export default CustomCheackBox;