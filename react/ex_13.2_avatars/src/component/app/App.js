import React from 'react';
import Avatar from './Avatar';
import AvatarData from './AvatarData';
import Input from './Input'
class App extends React.Component {
    state = { data: null, dataCopy: null, inputVal: '' }

    async componentDidMount() {
        this.setState({ data: await AvatarData() }, () => {
            this.setState({ dataCopy: this.state.data }, () => {
                // console.log(this.sortByFirstName('r'))
            })
        })
    }

    sortByFirstName = (str) => {
        console.log(this.state.data)
        return this.state.dataCopy.filter((e) => {
            return e.name.includes(str)
        })
    }

    onChange = (e) => {
        this.setState({ inputVal: e.target.value, data: this.sortByFirstName(e.target.value) })
    }
    render() {
        const setCards = () => {
            return this.state.data.map((e, i) => {
                return <Avatar
                    first={e.name}
                    last={e.last}
                    title={e.title}
                    img={e.imgUrl}
                    key={i}
                />
            })
        }
        return (
            <div>
                <div className="ui divider"></div>
                <Input onChange={this.onChange} myVal={this.state.inputVal} />
                <div className="ui divider"></div>
                <div className="ui grid">
                    <div className="five column row">
                        {this.state.data && setCards()}
                    </div>
                </div>
            </div>
        )
    }
}
export default App;

