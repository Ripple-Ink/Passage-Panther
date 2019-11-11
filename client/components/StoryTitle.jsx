import React from 'react';

const storyTitle = (props) => {
  return (
    <div>
      <li style={{cursor: 'pointer'}} onClick={() => props.titleClickHandler(props.item._id)}>
        Title: {props.item.title}
        Author: {props.item.author}
              
      </li>
    </div>  
  )
};

export default storyTitle;