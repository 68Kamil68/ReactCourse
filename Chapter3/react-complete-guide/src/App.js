import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Kamil', age: 23},
      { name: 'Jan', age: 21},
      { name: 'Grzes', age: 30}
    ],
  });
  const [otherState, setOtherState] = useState('some other value');
  
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({persons: [
      { name: 'Kamilek', age: 23},
      { name: 'Jan', age: 21},
      { name: 'Grzes', age: 32}
    ]
  });
  }
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: racing</Person>
        <Person />
      </div>
    );
}

export default app;
