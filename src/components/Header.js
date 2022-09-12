import NavBar from "./NavBar";
import CardWidget from "./CartWidget.js";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="div-header">
            <NavLink className={({isActive}) => (isActive ? "link-active" : "link-noactive")} to={'/'}><h1>LOGO</h1></NavLink>
            <NavBar/>
            <CardWidget/>
        </div>
    )
}

export default Header;