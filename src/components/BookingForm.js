function BookingForm({ userInfo }) {
  return (
    <div>
      <h2>Hi {userInfo.firstName}!</h2>
      <form className="booking-form">
        <section>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </section>

        <section>
          <label htmlFor="">Pick a date</label>
          <input type="text" placeholder="MM"/>
          <input type="text" placeholder="DD"/>
          <input type="text" placeholder="YYYY"/>
        </section>

        <section>
          <label htmlFor="">Pick a time</label>
          <input type="text" placeholder="00"/>
          <input type="text" placeholder="00"/>
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