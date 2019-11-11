import React from 'react';

const passage = (props) => {
  return (
    <div>
      <div>
        {props.passage.title}
        {props.passage.author}
        {props.passage.content}
      </div>
      <div>
        <div onClick={props.pathClickHandler}>{props.passage.path1}</div>
        <div onClick={props.pathClickHandler}>{props.passage.path2}</div>
      </div>
    </div>
  )
};

export default passage;