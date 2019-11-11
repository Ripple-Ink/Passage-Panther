import React from "react";
import StoryTitle from "./StoryTitle.jsx";
import PassageFeed from "./PassageFeed.jsx";

const titleFeed = props => {
  return (
    <div>
      {props.titles.map(item => (
        <div onClick={props.titleClickHandler}>
          {console.log("im in map", item)}
          <StoryTitle item={item} />
        </div>
      ))}
    </div>
  );
};

export default titleFeed;