import React, { Component } from "react";

const Header = props => {

    return (
        <div>
            <h1 style={{cursor: 'pointer'}}>Passages</h1>
            <div onClick={props.loginClickHandler} >Login</div>
        </div>

        //   <Login
        //     onChangeUsername={this.onChangeUsername}
        //     onChangePassword={this.onChangePassword}
        //     loginButton={this.loginButton}
        //   />
    )
}

export default Header;