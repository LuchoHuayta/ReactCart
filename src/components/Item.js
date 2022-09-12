import { Link } from "react-router-dom"

const Item = ( {producto} ) => {

    return (
        <div>
            <h4>{producto.name}</h4>
            <img src={producto.img} alt={producto.name}/>
            <p>${producto.price}</p>
            <Link to={`/item/${producto.id}`}><button>Ver mas</button></Link>
        </div>
    )
}

export default Item