import React from 'react'
import axios from 'axios';

class App extends React.Component {
    state = { term: 'random', set: '', category: null, current: '' };
    async componentDidMount() {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')
        this.setState({ category: response.data })
        console.log(this.state.category)
    }
    setButtons = () => {
        if (this.state.category) {
            return this.state.category.map((e, i) => {
                return <button onClick={this.onClick} key={i} className="ui inverted basic button">{e}</button>
            })
        }
    }
    onClick = async (e) => {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.textContent}`, {
            // params: { query: e.target.textContent },
            headers: {
            }
        })
        // console.log(response.data.value)
        this.setState({ current: response.data.value })
    }
    setJokeOnScreen = () => {
        return <h1>{this.state.current}</h1>
    }

    render() {
        return (
            <div className='ui segment'>
                <h4 className="ui horizontal  divider">
                    So... they say Chack Norris
                </h4>
                <div className="ui inverted segment">
                    {this.setButtons()}
                </div>
                {this.setJokeOnScreen()}
            </div>
        )
    }

}
export default App;