import React, { useState } from 'react'

const ItemCount = ({stock, addToCart}) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
            setCount(count + 1)
    }

    const handleSubstract = () => {
            setCount(count - 1)
    }


  return (
    <div>
        <button disabled={count <= 1} onClick={handleSubstract}>
            -
        </button>

        <span>{ count }</span>

        <button disabled={count >= 10} onClick={handleAdd} >
            +
        </button>

        <button>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount