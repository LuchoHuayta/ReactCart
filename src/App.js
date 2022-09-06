import './App.scss';
import {saludarPorConsola} from './SaludoConsola.js';
import NavBar from './components/NavBar.js';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

function App() {

  saludarPorConsola()

  return (
    <>
        <NavBar/>

        <ItemCount/>

        <ItemListContainer/>
    </>
  );
}

export default App;
