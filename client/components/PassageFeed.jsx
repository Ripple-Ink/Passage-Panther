import React from 'react';
import Passage from './Passage.jsx';

const passageFeed = (props) => {

  return (
    <div>
      {props.passages.map(passage => (
        <Passage pathClickHandler={props.pathClickHandler} passage={passage} />
      ))}
    </div>
  )
}

export default passageFeed;

