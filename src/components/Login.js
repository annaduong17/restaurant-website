import Button from "./Button";

function Login() {
  return ( 
    <form className="login-form">
      <div>
        <input id="first-name" type="text" placeholder="First Name" />
      </div>
      <div>
        <input id="last-name" type="text" placeholder="Last Name" />
      </div>
      <div>
        <input id="email" type="email" placeholder="Email" />
      </div>
      <div>
        <input id="password" type="password" placeholder="Password" />
      </div>
      <button className="">SUBMIT</button>
    </form>
  );
}

export default Login;