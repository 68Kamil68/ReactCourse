import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div className="Char">
            <p onClick={props.clicked}>{props.letter}</p>
        </div>
    )
}

export default char;