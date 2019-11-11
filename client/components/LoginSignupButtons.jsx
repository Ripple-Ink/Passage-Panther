import React, { Component } from "react";

const LoginSignupButtons = props => {

    return (
        <div>
            <div className="button" onClick={props.loginClickHandler}>Login</div>
            <div className="button" onClick={props.homeSignupButton}>Sign up</div>
        </div>
    );
}

export default LoginSignupButtons;