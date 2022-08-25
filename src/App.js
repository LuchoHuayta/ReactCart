import logo from './logo.svg';
import './App.scss';
import {saludarPorConsola} from './SaludoConsola.js';
import NavBar from './components/NavBar.js';
import Stock from './components/ItemListContainer';

function App() {

  saludarPorConsola()

  return (
    <>
        <NavBar/>
        <Stock/>
    </>
  );
}

export default App;
