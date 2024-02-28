function BookingForm() {
  return (
    <form>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />

     <label htmlFor="">Pick a date</label>
     <input type="text" placeholder="MM"/>
     <input type="text" placeholder="DD"/>
     <input type="text" placeholder="YYYY"/>

     <label htmlFor="">Pick a time</label>
     <input type="text" placeholder="00"/>
     <input type="text" placeholder="00"/>
     <select type="text" placeholder="AM">
      <option value="am">AM</option>
      <option value="pm">PM</option>
     </select>

     <input type="text" placeholder="0"/>
     <label htmlFor="">people</label>

     <button>MAKE RESERVATION</button>

    </form>
  );
}

export default BookingForm;