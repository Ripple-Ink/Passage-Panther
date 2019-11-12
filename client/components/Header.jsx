import React, { Component } from "react";

const Header = props => {

    return (
        <div>
            <h1 onClick={props.isPassageBackButton}>Passage Panther</h1>            
        </div>
    );
}

export default Header;