import React from 'react';
import './User.css';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>{props.name}</p>
            <p></p>
        </div>
    )
};

export default userOutput;