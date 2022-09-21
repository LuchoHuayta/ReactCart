import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then( (res) => {
            if (!categoryId) {
                setProductos(res)
            } else {
                setProductos( res.filter((prod) => prod.type === categoryId))
            }
        } )
        .catch( (error) => {
            console.log(error)
        })
        .finally( () => {
            setLoading(false)
        })
    }, [categoryId])
    
    return (
        <div className="div-itemListContainer">
            <h2>Contenedor de lista de productos</h2>
            {
                loading
                ? <h3>Spinner</h3>
                : <ItemList productos={productos}/>
            }
        </div>
    )
}


export default ItemListContainer