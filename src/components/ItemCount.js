import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';


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
    <div className='item-count'>

      <div>
        <button 
          onClick={handleRestar}
        >
          <IndeterminateCheckBoxIcon/>
        </button>

        <span>{ count }</span>

        <button 
          onClick={handleSumar}
        >
          <AddBoxIcon/>
        </button>
      </div>

      <div>
        <button onClick={handleAgregar}>
          <AddShoppingCartIcon fontSize='large'/>
        </button>
      </div>
    </div>
  )
}

export default ItemCount