import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Receipt from './pages/Receipt';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Receipt" element={<Receipt />} />
    </Routes>
    // <div>
    //   <Home/>
    // </div>
  );
}

export default App;
