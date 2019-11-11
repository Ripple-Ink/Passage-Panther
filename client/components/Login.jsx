import React from "react";
import Signup from './Signup.jsx'

const Login = props => {
  // console.log(props)
  return (
    <div className="formHolder">
      <input name="username" placeholder="Username" onChange={props.onChangeInput} type="text" />
      <input name="password" placeholder="Password" onChange={props.onChangeInput} type="password" />
      <div className="button" onClick={props.loginButton}>Log in</div>
      <div className="button" onClick={props.signupButtonInLogin}>Sign up</div>
    </div>
  );
};
export default Login;
