import { useState } from 'react';
import Reservations from './Reservations';
import DineLogo from './DineLogo';
import UserAccount from './UserAccount';
import BookingForm from './BookingForm';

function ReservationsPage() {
  const [ userInfo, setUserInfo ] = useState(null);

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
        {userInfo ? <BookingForm userInfo={userInfo} /> : <UserAccount setUserInfo={setUserInfo}/>}
      </div>
    </div>
  );
}

export default ReservationsPage;