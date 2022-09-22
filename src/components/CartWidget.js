import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CardWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
        <NavLink className={({isActive}) => (isActive ? "link-active" : "link-noactive")} to="/cart">
            <ShoppingCartIcon fontSize="" />
            <span>{cartQuantity()}</span>
        </NavLink>
    )
}

export default CardWidget;