import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import DoneIcon from '@mui/icons-material/Done';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            price: item.price,
            name: item.name,
            cantidad
        }
        addToCart( itemToCart )
    }

    return (
        <div className="div-itemDetail">
            <img src={item.img} alt={item.name}/>
            <h3>{item.name}</h3>
            <p className="p-desc">{item.desc}</p>
            <h4>${item.price}</h4>

            {isInCart(item.id)}
            {
                isInCart(item.id)
                ?   <Link to="/cart"><DoneIcon/><ShoppingCartCheckoutIcon/></Link>
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