import { useState } from 'react';
import axios from 'axios';

function BookingForm({ userInfo, setUserInfo }) {
  const [ formData, setFormData ] = useState({
    date: {
      month: "",
      day: "",
      year: ""
    },
    time: {
      hour: "",
      minute: ""
    }, 
    timeIndicator: "AM", 
    numOfGuests: 0
  });

  const handleDateInputChange = (e) => {
    const { name, value} = e.target;

    setFormData(prev => {
      const updatedFormData = {...prev, date: {...prev.date, [name]: value}};

      return updatedFormData;
    });
  };

  const handleTimeInputChange = (e) => {
    const { name, value} = e.target;

    setFormData(prev => {
      const updatedFormData = {...prev, time: {...prev.time, [name]: value}};

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
    // validate date
    // validate time
    // validate number of guests 
    // validate time indicators
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate form 
    // send form data to server
    try {
      const response = await axios.post("http://localhost:3001/reservations", {
        user_id: userInfo.userId,
        date: `${formData.date.year}-${formData.date.month}-${formData.date.day}`,
        time: `${formData.time.hour}:${formData.time.minute}:00`,
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
  };

  
  return (
    <div className="booking-form-container">
      <h2>Hi {userInfo?.firstName}!</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <section className="date-section">
          <p>Pick a date</p>
          <input onChange={handleDateInputChange} name="month" type="text" placeholder="MM" value={formData.date.month}/>
          <input onChange={handleDateInputChange} name="day" type="text" placeholder="DD" value={formData.date.day}/>
          <input onChange={handleDateInputChange} name="year" type="text" placeholder="YYYY" value={formData.date.year}/>
        </section>

        <section className="time-section">
          <p>Pick a time</p>
          <input onChange={handleTimeInputChange} name="hour" type="text" placeholder="00" value={formData.time.hour}/>
          <input onChange={handleTimeInputChange} name="minute" type="text" placeholder="00" value={formData.time.minute}/>
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
          <button onClick={handleDecrementClick}>
            <img src="/images/icons/icon-minus.svg" alt="minus icon" />
          </button>
          <span>{formData.numOfGuests} people</span>
          <button onClick={handleIncrementClick}>
            <img src="/images/icons/icon-plus.svg" alt="plus icon" />
          </button>
        </section>

        <section>
          <button type="submit">MAKE RESERVATION</button>
        </section>
      </form>
    </div>
  );
}

export default BookingForm;