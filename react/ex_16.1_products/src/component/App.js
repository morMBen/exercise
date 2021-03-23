import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './HomePage';
import Product from './Product';
import Header from './Header';
import ProductDetail from './ProductDetail';
import nf404 from './nf404';
class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/product' exact component={Product} />
                        <Route path='/product/:id' exact component={ProductDetail} />
                        <Route path='*' component={nf404} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;

