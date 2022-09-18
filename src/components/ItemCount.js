import React, { useState } from 'react'

const ItemCount = ({max, count, setCount, handleAgregar}) => {
    
    const handleRestar = () => {
      if (count > 1) {
        setCount(count - 1)
      }
    }

    const handleSumar = () => {
      if (count < max) {
        setCount(count + 1)
      }
    }

  return (
    <div>
        <button 
          onClick={handleRestar}
        >
            -
        </button>

        <span>{ count }</span>

        <button 
          onClick={handleSumar}
        >
            +
        </button>

        <button onClick={handleAgregar}>
          Añadir al carrito
        </button>
    </div>
  )
}

export default ItemCount