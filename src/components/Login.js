import Button from "./Button";

function Login({ setUserId }) {
  return ( 
    <form className="login-form">
      <div>
        <input id="email" type="email" placeholder="Email" />
      </div>
      <div>
        <input id="password" type="password" placeholder="Password" />
      </div>
      <button className="">LOG IN</button>
    </form>
  );
}

export default Login;