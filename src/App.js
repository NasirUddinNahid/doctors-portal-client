import { Route, Routes } from 'react-router-dom';
import './App.css';
import ABout from './Pages/About/ABout';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div >
    <Navbar></Navbar>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<ABout />} />
        <Route path="login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
