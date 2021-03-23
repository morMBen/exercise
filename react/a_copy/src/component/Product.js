import React from 'react';
import { Link } from 'react-router-dom'

import Store from './Store';
import ProductDetail from './ProductDetail';


class Product extends React.Component {
    state = { data: null }
    componentDidMount() {
        this.setState({ data: Store }, () => {
            // console.log(this.state.data)
        })
    }

    displayProductTitle = () => {
        return this.state.data.map((e) => {
            // console.log(e)
            return <Link to={`/product/${e.id}`} className='ui button primary' key={e.id}> {e.title}</ Link>
        })
    }

    render() {
        return (
            <>
                <h1>Products</h1>
                {this.state.data && this.displayProductTitle()}
            </>
        )

    }
}

export default Product;