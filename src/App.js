import './App.scss';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailCointainer from './components/ItemDetailContainer';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import { LoginProvider } from './context/LoginContext';

function App() {

  return (
    <LoginProvider>

      <CartProvider>

        <BrowserRouter>

          <CssBaseline />
          
          <Header/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>

            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>

            <Route path='/item/:itemId' element={<ItemDetailCointainer/>}/>

            <Route path='/cart' element={<Cart/>}/>

            <Route path='*' element={ <Navigate to ="/"/> }/>
          </Routes>

        </BrowserRouter>
          
      </CartProvider>

    </LoginProvider>
  );
}

export default App;
