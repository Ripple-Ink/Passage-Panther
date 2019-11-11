import React, { Component } from "react";

const Header = props => {
  return (
    <div>
      <h1>Passages</h1>
      <button onClick={props.loginClickHandler}>Login</button>
      <button onClick={props.homeSignupButton}>Sign up</button>
    </div>
  );
};

export default Header;