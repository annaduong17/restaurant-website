import { useState } from 'react';
import Register from "./Register";
import Login from "./Login";

function UserAccount({ setUserInfo }) {
  return (
    <div>
      <Register setUserInfo={setUserInfo}/>
      <Login setUserInfo={setUserInfo}/>
    </div>
  );
}

export default UserAccount; 