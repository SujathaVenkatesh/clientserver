
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Register.css';

function RegistrationForm() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    accountType: '',
    age: '',
    referrer: '',
    bio: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/register', formData);
      console.log('User registered successfully');
      alert('User Registered successfully');
      const loginData = {
        email: formData.email,
        password: formData.password
      };
      await axios.post('http://localhost:5000/api/login', loginData);
      console.log('Login successful');
      history.push('/'); 
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  const handleGetData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      console.log('Data received:', response.data);
    } catch (error) {
      console.error('Error getting data', error);
    }
  };

  return (
    <div>
      <h1 className='reg'>Welcome to WHY GLOBAL SERVICES</h1>

      <p className='para'>Please fill out this form with the required information</p>
      <form onSubmit={handleSubmit} action="/api/register" className='regform'>
                <fieldset>
          <label htmlFor="first-name" className='fname'>Enter Your First Name: </label>
          <input id="first-name" name="firstName" className='inpform' type="text" required onChange={handleChange} />
          <label htmlFor="last-name"  className='fname'>Enter Your Last Name: </label>
          <input id="last-name" name="lastName" className='inpform' type="text" required onChange={handleChange} />
          <label htmlFor="email"  className='fname'>Enter Your Email: </label>
          <input id="email" name="email" className='inpform' type="email" required onChange={handleChange} />
          <label htmlFor="new-password"  className='fname'>Create a New Password: </label>
          <input id="new-password" className='inpform' name="password" type="password" pattern="[a-z0-5]{8,}" required onChange={handleChange} />
        </fieldset>
        <fieldset >
          <label htmlFor="business-account">
            <input id="business-account" type="radio" name="accountType" className="inline" value="business" onChange={handleChange} /> Business Account
          </label>
          <label htmlFor="terms-and-conditions" name="terms-and-conditions">
            <input id="terms-and-conditions" type="checkbox" required name="termsAndConditions" className="inline" onChange={handleChange} /> I accept the <a href="https://mncartwork.wixsite.com/hello">terms and conditions</a>
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="profile-picture">Upload a profile picture: </label>
          <input id="profile-picture" type="file" name="file" onChange={handleChange} />
          <label htmlFor="age">Input your age (years): </label>
          <input id="age" type="number" name="age" min="13" max="120" onChange={handleChange} />
         
          <label htmlFor="bio">Provide a bio:</label>
          <textarea id="bio" name="bio" rows="3" cols="30" placeholder="I am.. " onChange={handleChange}></textarea>
        </fieldset>
        <button onClick={handleGetData}  className='logbut' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
