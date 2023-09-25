import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import registrationImage from './Images/loginLaptopImage.png';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    let formIsValid = true;
    const updatedErrors = { ...errors };

    if (!formData.username) {
      updatedErrors.username = 'Username is required';
      formIsValid = false;
    } else {
      updatedErrors.username = '';
    }

    if (!formData.email) {
      updatedErrors.email = 'Email is required';
      formIsValid = false;
    } else {
      updatedErrors.email = '';
    }

    if (!formData.password) {
      updatedErrors.password = 'Password is required';
      formIsValid = false;
    } else {
      updatedErrors.password = '';
    }

    setErrors(updatedErrors);

    if (!formIsValid) {
      // If the form is not valid, do not submit the request
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', formData);
      if (response) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      console.error('Response data:', error.response ? error.response.data : 'No response data');
      console.error('Response status:', error.response ? error.response.status : 'No response status');
      alert('Already Registered with this email... Try with another email.');
    }
  };

  return (
    <div>
      <img className="Image" src={registrationImage} alt="Registration" />

      <div className="Register-container">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
