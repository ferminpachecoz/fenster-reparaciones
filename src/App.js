import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Instalacion from './pages/Instalacion';

function App() {
  return (
    <Routes>
      <Route exact={true} path='/' element={<Home />} />
      <Route path='/instalacion' element={<Instalacion />} />
    </Routes>
  );
}

export default App;
