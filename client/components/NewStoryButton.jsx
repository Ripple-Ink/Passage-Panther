import React, { Component } from "react";

const NewStoryButton = props => {
  return (
    <div>
      {/* need to create method for renders upload component */}
      {/* if user is not logged in redirect to sign in page */}
      <div onClick={props.toggleIsUpload}>+</div>
    </div>
  );
};

export default NewStoryButton;
