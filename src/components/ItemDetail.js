import { useState } from "react";

import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            price: item.price,
            name: item.name,
            cantidad
        }
        console.log(itemToCart)
    }

    return (
        <div>
            <img src={item.img}/>
            <p>{item.type}</p>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <h4>${item.price}</h4>

            <ItemCount
                max={item.stock}
                count={cantidad}
                setCount={setCantidad}
                handleAgregar={handleAgregar}
            />
        </div>
    )

}

export default ItemDetail