import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request
      const res = await axios.post('http://localhost:5000/login', { email, password });
      
      // Store token and navigate to home page
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit" onSubmit={()=>navigate('/home')}>Login</button>
      </form>
      <div className="signup-redirect">
        <h3>Don't have an account? Sign up!</h3>
        <button type="button" onClick={() => navigate('/signup')}>Signup</button>
      </div>
    </div>
  );
};

export default Login;
