import React from "react";
import Signup from './Signup.jsx'

const Login = props => {
  // console.log(props)
  return (
    <div>
      Username: <input onChange={props.username} type="text" />
      Password: <input onChange={props.password} type="text" />
      <button onClick={props.loginButton}>Log in</button>
      <button onClick={props.signupButtonInLogin}>Sign up</button>
    </div>
  );
};
export default Login;
