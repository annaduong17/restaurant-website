import Register from "./Register";
import Login from "./Login";
import BookingForm from './BookingForm';

function UserAccount({ setUserInfo, showLogin, setShowLogin }) {
  return (
    <div className='user-account'>
      {showLogin ? <Login setUserInfo={setUserInfo}/> : <Register setShowLogin={setShowLogin} setUserInfo={setUserInfo}/>}
    </div>
  );
}

export default UserAccount; 