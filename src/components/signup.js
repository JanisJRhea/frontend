import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('**', email, password);
    try {
      // Perform signup
      await axios.post('http://localhost:5000/signup', { email, password });
      // Redirect to login page after successful signup
      navigate('/');
    } catch (err) {
      console.error('Error during signup:', err);
      // Optionally handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" >Signup</button>
      </form>
    </div>
  );
};

export default Signup;
