import './NavBar.css'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return(
        <>
            <nav className='Navbar'>
            <Link to="/">
                <a href>Home</a>
        </Link>
        <Link to="/Products">
                <a href>Products</a>
        </Link>
            </nav>
        </>
    )
} 