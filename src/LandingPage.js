import React from 'react';
import registrationImage from './Images/loginLaptopImage.png';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function LandinPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the '/register' route when the button is clicked
    navigate('/register');
  };

  return (
    <div>
      <h1 className='headingText'>Welcome to My Website</h1>
      <img className="Image" src={registrationImage} alt="Registration" />
      <div className="arrow-1"></div>
      <div className="arrow-2"></div>
      <div className="arrow-3"></div>
      <button className="landingutton" onClick={handleClick}>Register</button>
    </div>
  );
}

export default LandinPage;
