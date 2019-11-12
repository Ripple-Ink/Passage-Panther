import React from 'react';

import ButtonPath from './ButtonPath.jsx';

const passage = (props) => {
  return (
    <div>
      <div className="passage-wrapper">
        <div className="passage-title">
          {props.passage.title}
        </div>
        <div className="passage-content">
          {props.passage.content} 
        </div>
        <div className="passage-author">
          by {props.passage.author}
        </div>
        { !props.passage.childClicked && <ButtonPath passage={props.passage} pathClickHandler={props.pathClickHandler} /> }
      </div>  
    </div>
  )
};

export default passage;