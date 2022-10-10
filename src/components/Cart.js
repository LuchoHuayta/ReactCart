import { useCartContext } from "../context/CartContext"
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Cart= () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    return (
        <div className="div-cart">
            <h2>Carrito</h2>

            { cart.map((item) => (
            <div className="cart-list" key={item.id}>
                <div>
                    <img src={item.img} alt={item.name}/>
                    <h3>{item.name}</h3>
                </div>
                <p>${item.price}</p>
                <p>x{item.cantidad}</p>
                <IconButton
                    onClick={() => removeItem(item.id)}
                    aria-label="delete">
                    <DeleteForeverIcon/>
                </IconButton>
            </div>
            ))}

            <h4>Total: ${cartTotal()}</h4>
            <div className="final-moves">
                <button onClick={emptyCart}><RemoveShoppingCartIcon/><p>Limpiar</p></button>
                <button><Link to="/checkout"><PriceCheckIcon/></Link><p>Pagar</p></button>
            </div>
        </div>

    )

}

export default Cart