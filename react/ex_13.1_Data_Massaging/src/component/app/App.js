import React from 'react';
import Data from './Data';
import Name from './Name';
import Card from './Card'

class App extends React.Component {
    state = { names: null, befor1990: null }

    getArrOfAllNames = () => {
        return Data.map((e) => e.name)
    }
    getBornBefor1990 = () => {
        return Data.filter((e) => {
            const year = e.birthday.substring(e.birthday.length - 4, e.birthday.length);
            return year < 1990
        })
    }
    componentDidMount() {
        this.setState({ names: this.getArrOfAllNames(), befor1990: this.getBornBefor1990() }, () => {
            console.log(this.state)
        })
    }

    temp = () => {
        // console.log(this.getBornBefor1990())
        // console.log(this.getBornBefor1990())
        return <div></div>
    }
    render() {
        const setNamesOnScreen = () => {
            return this.state.names.map((e, i) => { return <Name key={i} names={e} /> })
        }
        const setCardsOnScreen = () => {
            return this.state.befor1990.map((e, i) => {
                return (<Card
                    key={i}
                    names={e.name}
                    birthday={e.birthday}
                    favoriteFoods={e.favoriteFoods}
                />
                )
            })
        }
        return (
            <div className='class="ui grid'>
                {this.state.names && setNamesOnScreen()}
                {this.state.befor1990 && setCardsOnScreen()}
            </div>
        )
    }

}
export default App;