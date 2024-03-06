import { useState } from 'react';

function BookingForm({ userInfo }) {
  const [ formData, setFormData ] = useState({
    date: {
      month: "",
      day: "",
      year: ""
    },
    time: {
      hour: "",
      minute: ""
    }
  });

  const handleDateInputChange = (e) => {
    const { name, value} = e.target;

    setFormData(prev => {
      const updatedFormData = {...prev, date: {...prev.date, [name]: value}};

      return updatedFormData;
    });
  }

  const handleTimeInputChange = (e) => {
    const { name, value} = e.target;

    setFormData(prev => {
      const updatedFormData = {...prev, time: {...prev.time, [name]: value}};

      return updatedFormData;
    });
  }

  return (
    <div className="booking-form-container">
      {/* <h2>Hi {userInfo.firstName}!</h2> */}
      <form className="booking-form">
        <section className="date-section">
          <label htmlFor="">Pick a date</label>
          <input onChange={handleDateInputChange} name="month" type="text" placeholder="MM" value={formData.date.month}/>
          <input onChange={handleDateInputChange} name="day" type="text" placeholder="DD" value={formData.date.day}/>
          <input onChange={handleDateInputChange} name="year" type="text" placeholder="YYYY" value={formData.date.year}/>
        </section>

        <section className="time-section">
          <label htmlFor="">Pick a time</label>
          <input onChange={handleTimeInputChange} name="hour" type="text" placeholder="00" value={formData.time.hour}/>
          <input onChange={handleTimeInputChange} name="minute" type="text" placeholder="00" value={formData.time.minute}/>
          <button>
          <span>AM</span>
          <img src="/images/icons/icon-arrow.svg" alt="arrow icon" />
          </button>

          <ul>
          <li>
            <img src="/images/icons/icon-check.svg" alt="check icon" />
            <span>AM</span>
          </li>
          <li>
            <img src="/images/icons/icon-check.svg" alt="check icon" />
            <span>PM</span>
          </li>
          </ul>
        </section>

        <section>
          <button>
            <img src="/images/icons/icon-minus.svg" alt="minus icon" />
          </button>
          <span>0 people</span>
          <button>
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