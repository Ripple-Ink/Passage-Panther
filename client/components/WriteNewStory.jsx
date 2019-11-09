import React, { Component } from "react";

const WriteNewStory = props => {
    return (
        <div>
            <input type="text" id="text" name="text_name" style="width: 300px;" />
            <div id="upload_Button">Submit</div>
        </div>
    )
}

export default WriteNewStory;