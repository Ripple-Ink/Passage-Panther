import React, { Component } from "react";

const UploadNewStory = props => {
  console.log(props)
  return (
    <div className="formHolder">
      <input name="title" type="text" placeholder="Title" onChange={props.onChangeInput}/>
      <input name="author" type="text" placeholder="Author" onChange={props.onChangeInput}/>
      <input name="content" type="text" placeholder="Content" onChange={props.onChangeInput}/>
      <input name="path1" type="text" placeholder="Path 1" onChange={props.onChangeInput}/>
      <input name="path2" type="text" placeholder="Path 2" onChange={props.onChangeInput}/>
      <div>
        <div className="button" onClick={props.backButton}>Back</div>      
        <div className="button" onClick={props.handleUploadPassage}>Submit</div>
      </div>

    </div>
  );
};

export default UploadNewStory;