import Reservations from './Reservations';
import BookingForm from './BookingForm';

function ReservationsPage() {
  const imgDesktop = "/images/booking/hero-bg/desktop.jpg";
  const imgTablet = "/images/booking/hero-bg/tablet.jpg";
  const imgMobile = "/images/booking/hero-bg/mobile.jpg";

  return (
    <div>
      <div>
        <img src={imgDesktop} alt="bowl of food" />
        <img src="/images/patterns/pattern-curve-bottom-right.svg" alt="curve pattern" />
        <img src="/images/patterns/pattern-lines.svg" alt="lines pattern" />
      </div>
      <Reservations />
      <BookingForm />
    </div>
  );
}

export default ReservationsPage;