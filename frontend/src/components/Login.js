import React, { useState } from 'react';
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login (replace with actual authentication logic)
    if (formData.username === 'yourUsername' && formData.password === 'yourPassword') {
      alert('Login successful');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Login</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
