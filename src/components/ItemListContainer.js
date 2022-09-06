import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
        .then( (res) => {
            setProductos(res)
        } )
        .catch( (error) => {
            console.log(error)
        })
        .finally( () => {
            console.log("Fin del pedirDatos")
        })
    }, [])
    
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer