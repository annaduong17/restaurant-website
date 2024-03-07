import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Reservation from './Reservation';

function ReservationList({ userInfo }) {
  const [ reservations, setReservations ] = useState([])

  const fetchReservations = async () => {
    const response = await axios.get(`http://localhost:3001/reservations/${userInfo.userId}`);

    console.log(response.data);
    setReservations(response.data);
  };
  
  

  const renderedItems = reservations.map((reservation, i) => {
    return (
      <Reservation key={i} reservation={reservation} setReservations={setReservations}/>
    );
  });

  useEffect(() => {
    fetchReservations(userInfo.userId);
  }, [userInfo.userId]);

  return (
    <div className='reservation-list'>
      <h3>Your Reservations</h3>
      {renderedItems}
    </div>
  );
}

export default ReservationList;