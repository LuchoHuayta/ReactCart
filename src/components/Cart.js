import { useContext } from "react"
import { CartContext } from "./CartContext"


const Cart= () => {

    const { cart, cartTotal, emptyCart } = useContext(CartContext)

    return (
        <div>
            <h2>Carrito</h2>
            <hr/>

            { cart.map((item) => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>x{item.cantidad}</p>
                <hr/>
            </div>
            ))}

            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart}>Vaciar Carrito</button>
        </div>

    )

}

export default Cart