import axios from 'axios';

function Reservation({ reservation, setReservations }) {

  const dateString = reservation.date;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const humanReadableDate = date.toLocaleString("en-US", options);

  const timeString = reservation.time;
  const timeParts = timeString.split(":");
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  // Convert hours to 12-hour format
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;

  const formattedTime = displayHours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;
  
  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/reservations/${id}`);

      setReservations(prev => prev.filter(reservation => reservation._id !== id));

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='reservation'>
      <span>Reservation #{reservation._id}: {humanReadableDate} at {formattedTime} for {reservation.num_of_guests}</span>
      <button onClick={() => handleDeleteClick(reservation._id)}>Cancel Reservation</button>
    </div>
  )
}

export default Reservation;