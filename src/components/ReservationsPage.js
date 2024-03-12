import { useState } from 'react';
import ReservationSection from './ReservationSection';
import DineLogo from './DineLogo';
import UserAccount from './UserAccount';
import BookingForm from './BookingForm';
import ReservationList from './ReservationList';

function ReservationsPage() {
  const [ userInfo, setUserInfo ] = useState(null);
  const [ showLogin, setShowLogin ] = useState(false);

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
        {userInfo?.userId ? 
        <ReservationList userInfo={userInfo} /> : <ReservationSection />}
        {userInfo?.userId ? <BookingForm userInfo={userInfo} setUserInfo={setUserInfo} /> :
        <UserAccount showLogin={showLogin} setShowLogin={setShowLogin} setUserInfo={setUserInfo}/>}
      </div>
    </div>
  );
}

export default ReservationsPage;