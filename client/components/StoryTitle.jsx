import React from 'react';

const storyTitle = (props) => {
  return (
    <div>
      <li style={{cursor: 'pointer'}} onClick={() => props.titleClickHandler(props.item._id)}>
        <span className="storyTitle">{props.item.title}</span> <span className="storyAuthor">by {props.item.author}</span>
      </li>
    </div>  
  )
};

export default storyTitle;