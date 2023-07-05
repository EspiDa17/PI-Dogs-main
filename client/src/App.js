import './App.css';

// REACT-ROUTER --> Librería para definir de forma declarativa (Especifico el resultado mas no como llegar a el) las vistas que queremos renderizar dependiendo la URL
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
// import Error from './Components/Error/Error.jsx'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
