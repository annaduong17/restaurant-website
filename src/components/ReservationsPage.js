import Reservations from './Reservations';
import BookingForm from './BookingForm';
import DineLogo from './DineLogo';
import Login from './Login';
import Register from './Register';

function ReservationsPage() {
  const imgDesktop = "/images/booking/hero-bg-desktop.jpg";
  const imgTablet = "/images/booking/hero-bg/tablet.jpg";
  const imgMobile = "/images/booking/hero-bg/mobile.jpg";

  return (
    <div className='reservations-page'>
      <div className='displays'>
        <img src={imgDesktop} alt="bowl of food" />
        <img src="/images/patterns/pattern-curve-bottom-right.svg" alt="curve pattern" />
        <img src="/images/patterns/pattern-lines.svg" alt="lines pattern" />
      </div>
      <div className='booking'>
        <DineLogo />
        <Reservations />
        <Register />
      </div>
    </div>
  );
}

export default ReservationsPage;