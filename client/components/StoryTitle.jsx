import React from 'react';

const storyTitle = (props) => {
  return (
    <li style={{cursor: 'pointer'}} onClick={() => props.titleClickHandler(props.item._id)}>
      <p className="titles-title">
        {props.item.title} 
        <span className="titles-author">
          {`by ${props.item.author}`}
        </span>
      </p>
    </li>
  )
};

export default storyTitle;