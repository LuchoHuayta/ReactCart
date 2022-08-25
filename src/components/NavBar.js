import CardWidget from "./CartWidget.js";


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Link1</a></li>
                <li><a href="#">Link2</a></li>
                <li><CardWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar;