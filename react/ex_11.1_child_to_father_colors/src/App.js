import React from 'react';
import CustomButton from './CustomButton';

class App extends React.Component {
    state = { colors: ['red', 'blue', 'yellow'], colorText: '' }

    print = (color) => {
        this.setState({ colorText: color })
        // return console.log(color);
    }

    itterat = () => {
        let tempArr = [];
        for (let i = 0; i < this.state.colors.length; i++) {
            let brr;
            brr = <CustomButton bG={this.state.colors[i]} afterClick={this.print} />
            tempArr.push(brr);
        }

        return tempArr;
    }

    render() {
        return (
            <div>
                {this.itterat()}
                <h1>{this.state.colorText}</h1>
            </div>
        )
    }
}
export default App;