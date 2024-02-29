import { NavLink } from 'react-router-dom';

function Button() {
  return (
    <NavLink className="booking-btn" to="/reservations">BOOK A TABLE</NavLink>
  );
}

export default Button;