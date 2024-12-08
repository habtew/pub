import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // For navigation

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/login', { email, password });
      console.log('Login response:', response); // Replace with actual logic

      // Handle successful login (e.g., store token, redirect)
      if (response.data.success) {
        // Store user token (replace with your token storage mechanism)
        localStorage.setItem('userToken', response.data.token);
        history.push('/'); // Redirect to home page or dashboard
      } else {
        console.error('Login failed:', response.data.message); // Handle login errors
        // Show error message to user
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle network or other errors
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;