import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Routes>
      <Route exact={true} path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
