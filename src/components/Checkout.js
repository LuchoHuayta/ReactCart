import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase/fireconfig"
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [orderId, setOrderID] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal(),
        }

        if (values.nombre.length <2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length <2) {
            alert("Correo incorrecto")
            return
        }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                console.log(cart)
                setOrderID(doc.id)
                terminarCompra()
            })
    }

    if (orderId) {
        return (
            <div className="div-checkout">
                <h2>Mi pedido</h2>
                <p>Tu numero de orden es: <strong>{orderId}</strong></p>
                <h3><PriceCheckIcon fontSize="medium"/> Pago exitoso</h3>

                <div>
                { cart.map((item) => (
            <div className="cart-list" key={item.id}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>x{item.cantidad}</p>
            </div>
            ))}
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="div-checkout">
            <h2>Checkout</h2>

            <form onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'} 
                    placeholder="Nombre"
                />
                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'} 
                    placeholder="Correo"
                />
                <input
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'} 
                    placeholder="Direccion"
                />

                <button type="submit"><CreditScoreIcon/><p>Confirmar Pedido</p></button>
            </form>
        </div>
    )
}

export default Checkout