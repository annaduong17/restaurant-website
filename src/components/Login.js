import axios from 'axios';
import { useState } from 'react';

function Login({ setUserInfo }) {
  const [ formData, setFormData ] = useState({
    email: "",
    password: ""
  });

  const [ errors, setErrors ] = useState({});

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

        setUserInfo(response.data);

      } catch (error) {
        console.log(error);
      }
    }
  }

  
  return ( 
    <form noValidate onSubmit={handleSubmit} className="login-form">
      <div>
        <input onChange={handleInputChange} name="email" type="email" placeholder="Email" value={formData.email} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <input onChange={handleInputChange} name="password" type="password" placeholder="Password" value={formData.password} />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">LOG IN</button>
    </form>
  );
}

export default Login;