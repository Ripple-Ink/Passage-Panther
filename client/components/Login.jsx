import React, { Component } from "react";
const login = props => {
  return (
    <div>
      {/* <form> */}
        Username: <input onChnage={props.onChangeUsername} type="text" />
        Password: <input onChnage={props.onChangePassword} type="text" />/* show password feature*/
        <button onClick={() => props.loginButton() }>Log in</button>
        <button>Sign up</button>
        <button>Forgot password</button>
      {/* </form> */}
    </div>
  );
};
export default login;