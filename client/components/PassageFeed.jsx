import React from 'react';
import Passage from './Passage.jsx';

const passageFeed = (props) => {
  return (
    <div className="passage-feed">          
      {props.passages.map(passage => (
        <Passage pathClickHandler={props.pathClickHandler} passage={passage} />
      ))}
      <div className="button back-to-main" onClick={props.isPassageBackButton}>Back To Main</div>
    </div>
  )
}

export default passageFeed;