import React from 'react';

const passage = (props) => {
  

  return (
    <div>
      <div className="passage-wrapper">
        <div className="passage-title">
          Title: {props.passage.title}
        </div>
        <div className="passsage-author">  
          Author: {props.passage.author}
        </div>
        <div className="passage-content">
          Passage: {props.passage.content} 
        </div>     
        <div className="btn-path">
          <div id="1" onClick={(e) => props.pathClickHandler(props.passage.child1, e.target.id)}>{props.passage.path1}</div>
          <div id="2" onClick={(e) => props.pathClickHandler(props.passage.child2, e.target.id)}>{props.passage.path2}</div>
        </div>
      </div>  
    </div>
  )
};

export default passage;