import { Link } from 'react-router-dom'
const Header = () => {
    return <>
        <Link to='/' className='ui button primary'>Home</Link>
        <Link to='/product' className='ui button primary'>Products</Link>
    </>
}

export default Header;