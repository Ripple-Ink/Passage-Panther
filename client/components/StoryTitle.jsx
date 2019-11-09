import React from 'react';

const storyTitle = (props) => {
  return (
    <div>
      {props.item.title}
      {props.item.author}
    </div>
  )
};

export default storyTitle;