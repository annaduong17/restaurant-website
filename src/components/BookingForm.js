import { useState } from 'react';
import axios from 'axios';

function BookingForm({ userInfo, setUserInfo }) {
  const [ formData, setFormData ] = useState({
    month: "",
    day: "",
    year: "",
    hour: "",
    minute: "", 
    timeIndicator: "AM", 
    numOfGuests: 0
  });
  const [ errors, setErrors ] = useState({});

  const handleInputChange = (e) => {
    const { name, value} = e.target;

    setFormData(prev => {
      const updatedFormData = {...prev, [name]: value };

      return updatedFormData;
    });
  };

  const handleIncrementClick = () => {
    setFormData(prev => {
      const updatedFormData = {...prev, numOfGuests: prev.numOfGuests + 1};
      return updatedFormData;
    });
  };

  const handleDecrementClick = () => {
    setFormData(prev => {
      if (prev.numOfGuests === 0) {
        return 0;
      } else {
        const updatedFormData = {...prev, numOfGuests: prev.numOfGuests - 1};
        return updatedFormData;
      }
    });
  };

  const handleAMClick = () => {
    setFormData(prev => {
      const updatedFormData = {...prev, timeIndicator: "AM"};
      return updatedFormData;
    });
  };

  const handlePMClick = () => {
    setFormData(prev => {
      const updatedFormData = {...prev, timeIndicator: "PM"};
      return updatedFormData;
    });
  };

  const validateForm = (formData) => {
    const newErrors = {};
    const { month, day, year, hour, minute, numOfGuests } = formData;
    // validate date
    if (month.length < 2) {
      newErrors.month = 'Must contain 2 digits';
    } else if (month > 13 || month < 1) {
      newErrors.month = 'Please add a valid month';
    }
    
    if (day.length < 2) {
      newErrors.day = 'Must contain 2 digits';
    } else if (day > 31 || day < 1) {
      newErrors.day = 'Must be a valid day';
    } else {
      const lastDayOfMonth = new Date(year, month, 0).getDate();
      if (day > lastDayOfMonth) {
        newErrors.day = `Must be ${lastDayOfMonth} or lower`;
      }
    }

    if (year.length < 4) {
      newErrors.year = 'Must contain 4 digits';
    } else if (year > new Date().getFullYear()) {
      newErrors.year = 'Must be in the past';
    }

    // validate time 
    if (hour.length < 2) {
      newErrors.hour = 'Must contain 2 digits';
    } else if (hour > 12) {
      newErrors.hour = 'Must be less than 13';
    } else if (hour < 1) {
      newErrors.hour = 'Must be at least 1';
    }

    if (minute.length < 2) {
      newErrors.minute = 'Must contain 2 digits';
    } else if (minute > 60) {
      newErrors.minute = 'Must be less than 60';
    } else if (minute < 1) {
      newErrors.minute = 'Must be at least 1';
    }

    // validate number of guests
    if (numOfGuests < 1) {
      newErrors.numOfGuests = 'Must be at least 1';
    } 

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate form 
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    // send form data to server
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("http://localhost:3001/reservations", {
          user_id: userInfo.userId,
          date: `${formData.year}-${formData.month}-${formData.day}`,
          time: `${formData.hour}:${formData.minute}:00`,
          num_of_guests: formData.numOfGuests,
          time_indicator: formData.timeIndicator
        });
  
        console.log(response.data);
        if (response.data._id) {
          setUserInfo(prev => {
            const updatedUserInfo = {...prev, resId: response.data._id};
            return updatedUserInfo;
          });
        }
  
      } catch (error) {
        console.log(error);
      }
    }
    
  };

  
  return (
    <div className="booking-form-container">
      <h2>Hi {userInfo?.firstName}!</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <section className="date-section">
          <p>Pick a date</p>
          <div>
            <input onChange={handleInputChange} name="month" type="text" placeholder="MM" value={formData.month}/>
            {errors.month && <p>{errors.month}</p>}
          </div>
          <div>
            <input onChange={handleInputChange} name="day" type="text" placeholder="DD" value={formData.day}/>
            {errors.day && <p>{errors.day}</p>}
          </div>
          <div>
            <input onChange={handleInputChange} name="year" type="text" placeholder="YYYY" value={formData.year}/>
            {errors.year && <p>{errors.year}</p>}
          </div>
        </section>

        <section className="time-section">
          <p>Pick a time</p>
          <div>
            <input onChange={handleInputChange} name="hour" type="text" placeholder="00" value={formData.hour}/>
            {errors.hour && <p>{errors.hour}</p>}
          </div>
          <div>
            <input onChange={handleInputChange} name="minute" type="text" placeholder="00" value={formData.minute}/>
            {errors.minute && <p>{errors.minute}</p>}
          </div>
          <button>
          <span>{formData.timeIndicator}</span>
          <img src="/images/icons/icon-arrow.svg" alt="arrow icon" />
          </button>

          <ul>
          <li>
            <img src="/images/icons/icon-check.svg" alt="check icon" />
            <span onClick={handleAMClick}>AM</span>
          </li>
          <li>
            <img src="/images/icons/icon-check.svg" alt="check icon" />
            <span onClick={handlePMClick}>PM</span>
          </li>
          </ul>
        </section>

        <section>
          <button type='button' onClick={handleDecrementClick}>
            <img src="/images/icons/icon-minus.svg" alt="minus icon" />
          </button>
          <span>{formData.numOfGuests} people</span>
          <button type='button' onClick={handleIncrementClick}>
            <img src="/images/icons/icon-plus.svg" alt="plus icon" />
          </button>
          {errors.numOfGuests && <p>{errors.numOfGuests}</p>}
        </section>

        <section>
          <button type="submit">MAKE RESERVATION</button>
        </section>
      </form>
    </div>
  );
}

export default BookingForm;