import React from 'react';
import './User.css'

const userInput = (props) => {
    return (
        <div >  
            <input type="text" onChange = {props.changed} value = {props.name} className="userInput"/> 
        </div>
      
    )
};

export default userInput;