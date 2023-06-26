import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaMailBulk } from 'react-icons/fa';
import './Signup.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      console.log(response.data); // Handle the response from the server
      // Perform any necessary actions after successful login
  
      // Display alert message
      alert('Welcome! You have successfully logged in.');
  
      // Redirect to the first page
      // Replace '/first-page' with the desired URL of your first page
      window.location.href = '/first-page';
    } catch (error) {
      console.error(error); // Handle the error
  
  
      if (error.response && error.response.status === 401) {
        alert('Invalid email or password. Please check your details.');
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };
  
  

  return (
    <section id="sign">
      <div className="login-boxes">
        <form className='form'>
          <h2 className='log'>Join Our Team</h2>
          <div className="input-boxes">
            <span className="icon">
              <FaMailBulk/>
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-boxes">
            <span className="icon">
              <FaEye/>
            </span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <a href="Register">Forgot Password</a>
            <button type="submit" className='logbut' onClick={handleLogin}>Login</button>
            {error && <p className="error-message">{error}</p>}
            <div className="register-link">
              <p>
                Don't have an account? <a href="/Register">Register</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
