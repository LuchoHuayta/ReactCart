

const Item = ( {producto} ) => {

    return (
        <div>
            <h4>{producto.name}</h4>
            <img src={producto.img} alt={producto.name}/>
            <p>${producto.price}</p>
        </div>
    )
}

export default Item