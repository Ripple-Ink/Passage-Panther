import React from "react";
import Signup from './Signup.jsx'

const Login = props => {
  // console.log(props)
  return (
    <div>
      Username: <input name="username" onChange={props.username} type="text" />
      Password: <input name="password" onChange={props.password} type="password" />
      <button onClick={props.loginButton}>Log in</button>
      <button onClick={props.signupButtonInLogin}>Sign up</button>
    </div>
  );
};
export default Login;