import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [ formData, setFormData ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [ userExists, setUserExists ] = useState(false);

  let userId;

  const [ errors, setErrors ] = useState({});

  const [ formSubmitted, setFormSubmitted ] = useState(false);

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
    // send data to backend 
    try {
      const response = await axios.post('http://localhost:3001/register', {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      console.log(response.data.success);

      if (response.data.userId) {
        userId = response.data.userId;
      } else if (!response.data.success) {
        setUserExists(true);
      }
    } catch (error) {
      console.log(error);
    }
    
  };

  const validateForm = (formData) => {
    // validate data 
  };

  return ( 
    <form onSubmit={handleSubmit} className="register-form">
      <div className="first-name-container">
        <input onChange={handleInputChange} name="first-name" type="text" placeholder="First Name" value={formData.firstName} />
      </div>
      <div className="last-name-container">
        <input onChange={handleInputChange} name="last-name" type="text" placeholder="Last Name" value={formData.lastName} />
      </div>
      <div className="email-name-container">
        <input onChange={handleInputChange} name="email" type="email" placeholder="Email" value={formData.email} />
      </div>
      <div className="password-container">
        <input onChange={handleInputChange} name="password" type="password" placeholder="Password" value={formData.password} />
      </div>
      <div>
        <button type="submit">CREATE ACCOUNT</button>
      </div>
      <div>
        {userExists && <p>Oops! It seems like you already have an account. Please use the link below to log in.</p>}
        <p>Already have an account?</p>
        <a href="">Log in here</a>
      </div>
    </form>
  );
}

export default Register;