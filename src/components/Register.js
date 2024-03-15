import { useState } from "react";
import axios from 'axios';
import Button from "./Button";

function Register({ setUserInfo, setShowLogin }) {
  const [ formData, setFormData ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [ userExists, setUserExists ] = useState(false);

  const [ errors, setErrors ] = useState({});
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let key = "";

    if (name === 'first-name') {
      key = "firstName";
    } else if (name === 'last-name') {
      key = "lastName";
    } else {
      key = name;
    }

    setFormData(prevFormData => {
      const updatedFormData = {...prevFormData, [key]: value};

      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // call validateForm with formData

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    // send data to backend 
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3001/register', {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password
        });
        console.log(response.data);
  
        if (response.data.userId) {
          setUserInfo(response.data);
          setUserExists(false);
        } else if (!response.data.success) {
          setUserExists(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(errors);
    }
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  }

  const validateForm = (formData) => {
     const newErrors = {};

     if (!formData.firstName.length) {
      newErrors.firstName = "Please enter your first name";
     } else if (formData.firstName.length > 50) {
      newErrors.firstName = "Please limit to 50 characters";
     }; 

     if (!formData.lastName.length) {
      newErrors.lastName = "Please enter your last name";
     } else if (formData.lastName.length > 50) {
      newErrors.lastName = "Please limit to 50 characters";
     }; 

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
  };

  
  return ( 
    <form noValidate onSubmit={handleSubmit} className="register-form">
      <h2>Register</h2>
      <div className="input-wrapper">
        <div className="first-name-container border-bottom">
          <input onChange={handleInputChange} name="first-name" type="text" placeholder="First Name" value={formData.firstName} />
        </div>
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>
      <div className="input-wrapper">
        <div className="last-name-container border-bottom">
          <input onChange={handleInputChange} name="last-name" type="text" placeholder="Last Name" value={formData.lastName} />
        </div>
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div className="input-wrapper">
        <div className="email-name-container border-bottom">
          <input onChange={handleInputChange} name="email" type="email" placeholder="Email" value={formData.email} />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="input-wrapper">
        <div className="password-container border-bottom">
          <input onChange={handleInputChange} name="password" type="password" placeholder="Password" value={formData.password} />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="button-container">
        <Button type="submit" className="account-btn">CREATE ACCOUNT</Button>
      </div>
      <div>
        {userExists && <p className="error">Oops! It seems like you already have an account.</p>}
        <p>Already have an account? <button onClick={handleLoginClick}>Log in here.</button></p>
      </div>
    </form>
  );
}

export default Register;