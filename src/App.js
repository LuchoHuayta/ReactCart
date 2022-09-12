import './App.scss';
import {saludarPorConsola} from './SaludoConsola.js';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailCointainer from './components/ItemDetailContainer';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline'

function App() {

  saludarPorConsola()

  return (

        <BrowserRouter>

          <CssBaseline />
          
          <Header/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>

            <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>

            <Route path='/item/:itemId' element={<ItemDetailCointainer/>}/>

            <Route path='*' element={ <Navigate to ="/"/> }/>
          </Routes>

        </BrowserRouter>

  );
}

export default App;
