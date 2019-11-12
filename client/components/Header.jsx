import React, { Component } from "react";

const Header = props => {

    return (
        <div>
            <h1 onClick={props.isPassageBackButton}>Passages</h1>            
        </div>
    );
}

export default Header;