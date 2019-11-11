import React from 'react';

const storyTitle = (props) => {
  return (
    <div>
      <li style={{cursor: 'pointer'}} onClick={() => props.titleClickHandler(props.item._id)}>
        {props.item.title} by {props.item.author}
      </li>
    </div>  
  )
};

export default storyTitle;