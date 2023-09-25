import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Register from './Register'
import LandinPage from './LandingPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/" element={<LandinPage/>} />
      <Route path="/register"  element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
