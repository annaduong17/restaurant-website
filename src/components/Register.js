import { useState } from "react";
import axios from 'axios';

function Register({ setUserInfo }) {
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
      <div className="first-name-container">
        <input onChange={handleInputChange} name="first-name" type="text" placeholder="First Name" value={formData.firstName} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div className="last-name-container">
        <input onChange={handleInputChange} name="last-name" type="text" placeholder="Last Name" value={formData.lastName} />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div className="email-name-container">
        <input onChange={handleInputChange} name="email" type="email" placeholder="Email" value={formData.email} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="password-container">
        <input onChange={handleInputChange} name="password" type="password" placeholder="Password" value={formData.password} />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <button type="submit">CREATE ACCOUNT</button>
      </div>
      <div>
        {userExists && <p>Oops! It seems like you already have an account. Please use the link below to log in.</p>}
      </div>
    </form>
  );
}

export default Register;