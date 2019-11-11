import React from "react";
import StoryTitle from "./StoryTitle.jsx";
import NewStoryButton from "./NewStoryButton.jsx";

const titleFeed = props => {
  return (
    <div>
      <NewStoryButton toggleIsUpload={props.toggleIsUpload} />

      {props.titles.map(item => (
        <StoryTitle titleClickHandler={props.titleClickHandler} item={item} />          
      ))}                      
    </div>
  );
};

export default titleFeed;