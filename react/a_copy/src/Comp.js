import React from 'react';

class Comp extends React.Component {

    state = {
        favoriteColor: 'blue',
        update: ''
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'red' })
        }, 1000)
    }

    componentDidUpdate() {
        const div = document.querySelector('#brr');
        div.textContent = `The updated favorite color is: ${this.state.favoriteColor}`;
    }

    render() {
        return (
            <div>
                <h1>
                    My favorite color is {this.state.favoriteColor}
                </h1>
                <div id="brr"></div>

            </div >
        )

    }

}


export default Comp;