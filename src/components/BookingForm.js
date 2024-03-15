import { useState } from 'react';
import axios from 'axios';
import Button from './Button';

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
  const [ showTimeIndicator, setShowTimeIndicator ] = useState(false);
  const [ selectedTime, setSelectedTime ] = useState("AM");

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
      if (prev.numOfGuests > 0) {
        const updatedFormData = {...prev, numOfGuests: prev.numOfGuests - 1};
        return updatedFormData;
      }
    });
  };

  const handleTimeIndicatorClick = () => {
    setShowTimeIndicator(prev => !prev);
  }

  const handleAMClick = () => {
    setFormData(prev => {
      const updatedFormData = {...prev, timeIndicator: "AM"};
      return updatedFormData;
    });
    setSelectedTime("AM");
    setShowTimeIndicator(prev => !prev);
  };

  const handlePMClick = () => {
    setFormData(prev => {
      const updatedFormData = {...prev, timeIndicator: "PM"};
      return updatedFormData;
    });
    setSelectedTime("PM");
    setShowTimeIndicator(prev => !prev);
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
    } else if (minute < 0) {
      newErrors.minute = 'Must be a positive value';
    }

    // validate number of guests
    if (numOfGuests === 0) {
      newErrors.numOfGuests = "Must be at least 1";
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
          <p className='heading'>Pick a date</p>
          <div className='input-wrapper'>
            <div className='border-bottom'>
              <input onChange={handleInputChange} name="month" type="text" placeholder="MM" value={formData.month}/>
            </div>
            {errors.month && <p className='error'>{errors.month}</p>}
          </div>
          <div className='input-wrapper'>
            <div className='border-bottom'>
              <input onChange={handleInputChange} name="day" type="text" placeholder="DD" value={formData.day}/>
            </div>
            {errors.day && <p className='error'>{errors.day}</p>}
          </div>
          <div className='input-wrapper'>
            <div className='border-bottom'>
              <input onChange={handleInputChange} name="year" type="text" placeholder="YYYY" value={formData.year}/>
            </div>
            {errors.year && <p className='error'>{errors.year}</p>}
          </div>
        </section>

        <section className="time-section">
          <p className='heading'>Pick a time</p>
          <div className='input-wrapper'>
            <div className='border-bottom'>
              <input onChange={handleInputChange} name="hour" type="text" placeholder="00" value={formData.hour}/>
            </div>
            {errors.hour && <p className='error'>{errors.hour}</p>}
          </div>
          <div className='input-wrapper'>
            <div className='border-bottom'>
              <input onChange={handleInputChange} name="minute" type="text" placeholder="00" value={formData.minute}/>
            </div>
            {errors.minute && <p className='error'>{errors.minute}</p>}
          </div>
          <div className='time-indicator'>
            <button type='button' onClick={handleTimeIndicatorClick}>
            <span>{formData.timeIndicator}</span>
            <img className={`${showTimeIndicator ? "flip" : ""}`} src="/images/icons/icon-arrow.svg" alt="arrow icon" />
            </button>
            {showTimeIndicator && <ul>
          <li>
            {selectedTime === "AM" && <img src="/images/icons/icon-check.svg" alt="check icon" />}
            <span onClick={handleAMClick}>AM</span>
          </li>
          <li>
            {selectedTime === "PM" && <img src="/images/icons/icon-check.svg" alt="check icon" />}
            <span onClick={handlePMClick}>PM</span>
          </li>
          </ul>}
          </div>

        </section>

        <section className='guests-section input-wrapper'>
          <div>
            <button disabled={formData.numOfGuests === 0} type='button' onClick={handleDecrementClick}>
              <img src="/images/icons/icon-minus.svg" alt="minus icon" />
            </button>
            <span>{formData.numOfGuests} people</span>
            <button type='button' onClick={handleIncrementClick}>
              <img src="/images/icons/icon-plus.svg" alt="plus icon" />
            </button>
          </div>
          {errors.numOfGuests && <p className='error'>{errors.numOfGuests}</p>}
        </section>
        

        <section className='button-container'>
          <Button type="submit">MAKE RESERVATION</Button>
        </section>
      </form>
    </div>
  );
}

export default BookingForm;