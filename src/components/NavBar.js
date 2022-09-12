
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <NavLink className={({isActive}) => (isActive ? "link-active" : "link-noactive")} to={'/productos/pescado'}>Pescado</NavLink>
            <NavLink className={({isActive}) => (isActive ? "link-active" : "link-noactive")} to={'/productos/pollo'}>Pollo</NavLink>
            <NavLink className={({isActive}) => (isActive ? "link-active" : "link-noactive")} to={'/productos/carne'}>Carne</NavLink>
        </nav>
    )
}

export default NavBar;