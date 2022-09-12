import CardWidget from "./CartWidget.js";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}>ItemListContainer</Link></li>
                <li><Link to={'/productos/pescado'}>Pescado</Link></li>
                <li><Link to={'/productos/pollo'}>Pollo</Link></li>
                <li><Link to={'/productos/carne'}>Carne</Link></li>
                <li><CardWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar;