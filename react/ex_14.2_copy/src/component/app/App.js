import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ text: 'asfasfa' })
        this.myRef = React.createRef();
    }


    onClick = () => {
        this.myRef.select()
        document.execCommand("copy")
    }
    onChange = (e) => {
        this.setState({ text: e.target.value })

    }
    render() {
        return (
            <div>
                <h1>What are you praying for?</h1>
                <textarea ref={textarea => this.myRef = textarea} value={this.state.text} onChange={this.onChange} rows="4" cols="50" />
                <button onClick={this.onClick}>Copy</button>
            </div>
        )
    }
}
export default App;

