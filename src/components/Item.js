import { Link } from "react-router-dom"

const Item = ( {producto} ) => {

    return (
        <div className="div-item">
            <img src={producto.img} alt={producto.name}/>
            <h4>{producto.name}</h4>
            <div>
                <p>${producto.price}</p>
                <Link to={`/item/${producto.id}`}><button>+</button></Link>
            </div>

        </div>
    )
}

export default Item