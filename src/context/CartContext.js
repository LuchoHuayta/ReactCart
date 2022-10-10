import { createContext, useContext } from "react";
import { useState } from 'react';


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
      setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
  
    const cartQuantity = () => {
      return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
      return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0)
    }

    const emptyCart = () => {
      setCart([])
    }

    const terminarCompra = () => {
      setCart([])
    }

    return (
        <CartContext.Provider value={ {
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            terminarCompra,
          } }>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider

export const useCartContext = () => {
    return useContext(CartContext)
}