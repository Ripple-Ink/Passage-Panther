import React, { Component } from "react";

const UploadNewStory = props => {
  return (
    <div>
      Title: <input type="text" onChange={props.onChangeTitle}/>
      Author: <input type="text" onChange={props.onChangeAuthor}/>
      Content: <input type="text" onChange={props.onChangeContent}/>
      Path 1: <input type="text" onChange={props.onChangePath1}/>
      Path 2: <input type="text" onChange={props.onChangePath2}/>
      <div onClick={() => {}}>
        Submit
      </div>
    </div>
  );
};

export default UploadNewStory;
