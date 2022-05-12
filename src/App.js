import { Route, Routes } from 'react-router-dom';
import './App.css';
import ABout from './Pages/About/ABout';
import Appointment from './Pages/Home/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Shared/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className='max-w-7xl	 mx-auto'>
    <Navbar></Navbar>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<ABout />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
