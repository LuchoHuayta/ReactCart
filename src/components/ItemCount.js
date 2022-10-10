import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ItemCount = ({max, count, setCount, handleAgregar}) => {
    
    const handleRestar = () => {
      if (count > 1) {
        setCount(count - 1)
      }
    }

    const handleSumar = () => {
      if (count < max) {
        setCount(count + 1)
      }
    }

  return (
    <div>
        <button 
          onClick={handleRestar}
        >
            -
        </button>

        <span>{ count }</span>

        <button 
          onClick={handleSumar}
        >
            +
        </button>

        <button onClick={handleAgregar}>
          <AddShoppingCartIcon/>
        </button>
    </div>
  )
}

export default ItemCount