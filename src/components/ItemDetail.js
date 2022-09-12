//import { useState } from "react";

const ItemDetail = ({item}) => {

    return (
        <div>
            <img src={item.img}/>
            <p>{item.type}</p>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <h4>${item.price}</h4>
            <button>Agregar al carrito</button>
        </div>
    )

}

export default ItemDetail