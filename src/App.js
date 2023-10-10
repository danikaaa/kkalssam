import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Receipt from './pages/Receipt';
import Loding from './pages/Loding';

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Receipt" element={<Receipt />} />
        <Route path="/Loding" element={<Loding />} />
      </Routes>

   
    // <div>
    //   <Home/>
    // </div>
  );
}

export default App;
