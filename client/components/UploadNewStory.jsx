import React, { Component } from "react";

const UploadNewStory = props => {
  return (
    <div>
      Title: <input name="title" type="text" onChange={props.onChangeInput}/>
      Author: <input name="author" type="text" onChange={props.onChangeInput}/>
      Content: <input name="content" type="text" onChange={props.onChangeInput}/>
      Path 1: <input name="path1" type="text" onChange={props.onChangeInput}/>
      Path 2: <input name="path2" type="text" onChange={props.onChangeInput}/>
      <div onClick={props.handleUploadPassage}>Submit</div>
    </div>
  );
};

export default UploadNewStory;