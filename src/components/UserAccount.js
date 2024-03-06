import Register from "./Register";
import Login from "./Login";
import BookingForm from './BookingForm';

function UserAccount({ setUserInfo }) {
  return (
    <div className='user-account'>
      <Register setUserInfo={setUserInfo}/>
      <Login setUserInfo={setUserInfo}/>
      <BookingForm />
    </div>
  );
}

export default UserAccount; 