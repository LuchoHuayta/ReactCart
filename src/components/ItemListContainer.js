import { useEffect, useState } from "react";
import { db } from "../firebase/fireconfig";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId
                    ? query(productosRef, where('type','==', categoryId) )
                    : productosRef
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}) )

                setProductos(productosDB)
            })
            .finally(() => (
                setLoading(false)
            ))

    }, [categoryId])
    
    return (
        <div className="div-itemListContainer">
            <h2>Platos disponibles</h2>
            {
                loading
                ? <CircularProgress color="inherit"/>
                : <ItemList productos={productos}/>
            }
        </div>
    )
}


export default ItemListContainer