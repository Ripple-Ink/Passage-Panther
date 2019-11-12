import React from 'react';

const ButtonPath = (props) => {
    return (
        <div className="btn-path">
            <div className="btn-1" id="1" onClick={(e) => props.pathClickHandler(props.passage.child1, e.target.id)}>{props.passage.path1}</div>
            <div className="btn-2" id="2" onClick={(e) => props.pathClickHandler(props.passage.child2, e.target.id)}>{props.passage.path2}</div>
        </div>
    )
};

export default ButtonPath;