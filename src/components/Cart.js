import { useCartContext } from "../context/CartContext"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";


const Cart= () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    return (
        <div>
            <h2>Carrito</h2>
            <hr/>

            { cart.map((item) => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>x{item.cantidad}</p>
                <IconButton
                    onClick={() => removeItem(item.id)}
                    color="error"
                    aria-label="delete">
                    <DeleteIcon/>
                </IconButton>
                <hr/>
            </div>
            ))}

            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart}>Vaciar Carrito</button>
            <Link to="/checkout">Terminar mi compra</Link>
        </div>

    )

}

export default Cart