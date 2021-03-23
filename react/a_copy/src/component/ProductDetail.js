import { Link } from 'react-router-dom'
import Store from './Store';


const ProductDetail = (props) => {
    console.log(Store[props.match.params.id - 1].title)
    return (
        <>
            <h2>{Store[props.match.params.id - 1].title}</h2>
            <h3>{Store[props.match.params.id - 1].size}</h3>
            <img src={Store[props.match.params.id - 1].imageUrl} alt={Store[props.match.params.id - 1].title} />
            <h3>{Store[props.match.params.id - 1].price}</h3>
            <Link to='/product' className='ui button primary'>Back</Link>
        </>
    )

}


export default ProductDetail;