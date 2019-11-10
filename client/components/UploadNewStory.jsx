import React, { Component } from "react";

const UploadNewStory = props => {
    return (
        <div>
            Title: <input type="text" id="title" />
            Content: <input type="text" id="content" style="width: 300px;" />
            Path 1: <input type="text"/>
            Path 2: <input type="text"/>
            <div onClick={()=>{}} id="upload_Button">Submit</div>
        </div>
    )
}

export default UploadNewStory;