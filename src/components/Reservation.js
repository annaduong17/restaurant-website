import axios from 'axios';

function Reservation({ reservation, setReservations }) {
  const handleDeleteClick = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/reservations/${id}`);

      console.log(response.data);
      setReservations(prev => prev.filter(reservation => reservation._id !== id));

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='reservation'>
      <span>Reservation id: {reservation._id}</span>
      <button onClick={() => handleDeleteClick(reservation._id)}>Cancel Reservation</button>
    </div>
  )
}

export default Reservation;