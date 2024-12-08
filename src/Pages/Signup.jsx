import React, { useState } from 'react';
import axios from 'axios';


function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://fakestoreapi.com/signup', { email, password });
      console.log('Signup response:', response); // Replace with actual logic

      // Handle successful signup (redirect to home)
      if (response.data.success) {
        history.push('/home'); // Redirect to home page
      } else {
        console.error('Signup failed:', response.data.message); // Handle signup errors
        // Show error message to user
      }
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle network or other errors
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;