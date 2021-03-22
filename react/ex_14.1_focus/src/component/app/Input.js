import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.addEventListener('load', () => {
            this.inputRef.current.focus()
        })
    }

    render() {
        return (
            <div className="ui icon input" >
                <input ref={this.inputRef} type="text" placeholder="Search..." />
                <i className="circular search link icon"></i>
            </div>
        )
    }
}
export default Input;
