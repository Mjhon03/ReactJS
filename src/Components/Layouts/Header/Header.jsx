import './Header.css';
import {NavBar} from '../../UI/NavBar/NavBar.jsx';
import {Logo} from '../../UI/Logo/Logo.jsx';

export const Header = () => {
    return(
        <>
        <header>
            <Logo/>
            <NavBar/>            
        </header>
        </>
    )
} 