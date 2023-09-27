import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css"
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    name:'',
    username: '',
    email: '',
    phoneNumber:'',
    password: '',
    ConfirmPassword:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/Signup', formData);
      if (response.status === 200) {
        alert('Signup successful');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label htmlFor="username">name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required   
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <label htmlFor="email">PhoneNumber:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required 
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required 
        />
        <label htmlFor="ConfirmPassword">ConfirmPassword:</label>
        <input
          type="Password"
          id="ConfirmPassword"
          name="ConfirmPassword"
          value={formData.ConfirmPassword}
          onChange={handleChange}
          required 
        />
        <button type="submit">SignUp</button>
        <div>
        <h4>Already have an account? <Link to="/Login">Login</Link></h4>
        </div>
      </form>
    </div>
  );
}
export default Signup;

