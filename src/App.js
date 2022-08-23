import logo from './logo.svg';
import './App.scss';
import {saludarPorConsola} from './SaludoConsola.js';
import NavBar from './components/NavBar.js';

function App() {

  saludarPorConsola()

  return (

        <NavBar/>

  );
}

export default App;
