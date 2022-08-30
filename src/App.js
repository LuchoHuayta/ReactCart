import './App.scss';
import {saludarPorConsola} from './SaludoConsola.js';
import NavBar from './components/NavBar.js';
import Stock from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  saludarPorConsola()

  return (
    <>
        <NavBar/>
        <Stock/>
        <ItemCount/>
    </>
  );
}

export default App;
