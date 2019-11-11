import React from 'react';
import Passage from './Passage.jsx';

const passageFeed = (props) => {
  return (
    <div className="passage-feed">          
      {props.passages.map(passage => (
        <Passage pathClickHandler={props.pathClickHandler} passage={passage} />
      ))}
      <div className="backButton" onClick={props.isPassageBackButton}>previous page</div>
    </div>
  )
}

export default passageFeed;
