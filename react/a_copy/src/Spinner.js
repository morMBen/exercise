import React from 'react';
import './Spinner1.css'
class Spinner extends React.Component {

    state = { name: ['spiner round-lo', 'spiner2 round-lo', 'spiner3 line-lo'] }

    randomisClass() {
        return Math.floor(Math.random() * 3);
    }

    componentDidMount() {
        this.setState({ name: this.state.name[this.randomisClass()] })
        setTimeout(() => {
            this.setState({ name: '' })
        }, 4000)
    }

    render() {
        return (
            <div>
                <div className={this.state.name}></div>
                <div></div>
            </div>
        )
    }
}
export default Spinner;