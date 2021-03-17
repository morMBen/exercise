import React from "react";

class CustomButton extends React.Component {


    render() {
        return (
            <button

                style={{ background: this.props.bG }}
                onClick={() => { this.props.afterClick(this.props.bG) }}
            >{this.props.bG}</button >
        )
    }
}
export default CustomButton;