import React, { useState } from 'react';
import './Login.css';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';
import registrationImage from './Images/loginLaptopImage.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false); // Track if email field has been touched
  const [passwordTouched, setPasswordTouched] = useState(false); // Track if password field has been touched
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if the form has been submitted
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailTouched(true); // Mark email field as touched
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordTouched(true); // Mark password field as touched
  };

  const handleClick = async () => {
    setEmailTouched(true); // Mark email field as touched
    setPasswordTouched(true); // Mark password field as touched
    setEmailError(''); // Reset email error
    setPasswordError(''); // Reset password error
    setFormSubmitted(true); // Mark the form as submitted

    if (!email && !password) {
      setEmailError('Email is required');
      setPasswordError('Password is required');
      return;
    }

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/saveData', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login successful, redirect to the home screen
        navigate('/home');
      } else {
        // Login failed, display an error message
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <img className="Image" src={registrationImage} alt="Registration" />

      <div className="login-container">
        <h2 className='heading'>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {formSubmitted && emailTouched && !email && <div className="error">Email is required</div>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {formSubmitted && passwordTouched && !password && <div className="error">Password is required</div>}
        </div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}

export default Login;
