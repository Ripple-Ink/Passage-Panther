import React, { Component } from "react";

const Login = props => {
  return (
    <div>
      {/* <form> */}
      Username: <input onChnage={props.onChangeUsername} type="text" />
      Password: <input onChnage={props.onChangePassword} type="text" />
      /* show password feature*/
      <div onClick={() => {}}>Log in</div>
      <div onClick={() => {}}>Sign up</div>
      <div onClick={() => {}}>Forgot password</div>
      {/* </form> */}
    </div>
  );
};
export default Login;
