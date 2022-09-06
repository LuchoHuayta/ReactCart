import Item from "./Item"


const ItemList = ( {productos = []} ) => {

    return (
        <div>
            <h2>Contenedor de lista de productos</h2>
            <hr/>
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList