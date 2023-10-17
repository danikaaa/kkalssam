import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Receipt from './pages/Receipt';
import Loding from './pages/Loding';
import Logo from './pages/Logo';

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Receipt" element={<Receipt />} />
        <Route path="/Loding" element={<Loding />} />
        <Route path="/Logo" element={<Logo />} />
      </Routes>

   
    // <div>
    //   <Home/>
    // </div>
  );
}

export default App;
