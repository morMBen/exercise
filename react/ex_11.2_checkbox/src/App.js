import React from 'react';
import CustomCheackBox from './CustomCheackBox';

class App extends React.Component {
    // state = { c1: true, c2: false, c3: true, c4: false }



    render() {
        return (
            <div>
                <CustomCheackBox onDefault={false} title='I read the term of the app' />
                <CustomCheackBox onDefault={true} title='I accept the term of the app' />
                <CustomCheackBox onDefault={false} title='I want to get the weekly news letter' />
                <CustomCheackBox onDefault={true} title='I want to get sales and offers' />

            </div>
        )
    }
}
export default App;