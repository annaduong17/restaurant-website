import axios from 'axios';
import { useState } from 'react';
import Button from './Button';

function Login({ setUserInfo }) {
  const [ formData, setFormData ] = useState({
    email: "",
    password: ""
  });

  const [ errors, setErrors ] = useState({});

  const [ failedLogin, setFailedLogin ] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevFormData => {
      const updatedFormData = {...prevFormData, [name]: value};return updatedFormData;
    });
  }

  const validateForm = (formData) => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!formData.email.length) {
      newErrors.email = "Please enter your email";
     } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
     };

     if (!formData.password.length) {
      newErrors.password = "Please enter a password";
     } else if (formData.password.length < 8) {
      newErrors.password = "Your password needs to include at least 8 characters";
     };

     return newErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3001/login', {
          email: formData.email,
          password: formData.password
        });

        console.log(response);
        setUserInfo(response.data);
        if (response.data.message) {
          setFailedLogin(response.data.message);
        }

      } catch (error) {
        console.log(error);
        setFailedLogin("Invalid email or password. Please double-check your login details and try again.");
      }
    }
  }

  
  return ( 
    <form noValidate onSubmit={handleSubmit} className="login-form">
      <h2>Log In</h2>
      <div className='input-wrapper'>
        <div className='border-bottom'>
          <input onChange={handleInputChange} name="email" type="email" placeholder="Email" value={formData.email} />
        </div>
        {errors.email && <p className='error'>{errors.email}</p>}
      </div>
      <div className='input-wrapper'>
        <div className='border-bottom'>
          <input onChange={handleInputChange} name="password" type="password" placeholder="Password" value={formData.password} />
        </div>
        {errors.password && <p className='error'>{errors.password}</p>}
      </div>
      <div className='button-container'>
        <Button type="submit" className="account-btn">LOG IN</Button>
        {failedLogin && <p>{failedLogin}</p> }
      </div>
    </form>
  );
}

export default Login;