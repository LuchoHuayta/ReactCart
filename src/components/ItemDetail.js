import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

    const { cart, addToCart, isInCart } = useContext(CartContext)
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            price: item.price,
            name: item.name,
            cantidad
        }
        console.log(isInCart(item.id))
        addToCart( itemToCart )
    }

    return (
        <div>
            <img src={item.img} alt={item.name}/>
            <p>{item.type}</p>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <h4>${item.price}</h4>

            {isInCart(item.id) && <p>El producto ya esta en el carrito</p>}
            {
                isInCart(item.id)
                ?   <Link to="/cart">Terminar mi compra</Link>
                :   <ItemCount
                        max={item.stock}
                        count={cantidad}
                        setCount={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }

        </div>
    )

}

export default ItemDetail