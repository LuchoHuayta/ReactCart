import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/fireconfig";
import ItemDetail from "./ItemDetail";
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailCointainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    // agregue el itemId aca arriba
    
    return (
        <div>
            {
                loading
                ? <CircularProgress color="inherit"/>
                : <ItemDetail item={item}/>
            }
        </div>
    )
}

export default ItemDetailCointainer