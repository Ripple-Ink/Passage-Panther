import React, { Component } from "react";

const NewStoryButton = props => {
  return (
    <div>
      {/* need to create method for renders upload component */}
      {/* if user is not logged in redirect to sign in page */}
      <div className="btn-start-new-story" onClick={props.toggleIsUpload}> + Start New Story </div>
    </div>
  );
};

export default NewStoryButton;
