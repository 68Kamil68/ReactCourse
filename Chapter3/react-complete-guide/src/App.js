import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';


class App extends Component {
  state = {
    persons: [
      {id: 'koo', name: 'Manu', age: 29 },
      {id: 'lolo', name: 'Max', age: 28 },
      {id: 'gugu', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    username : 'Kamilek'
  };



  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  }

  usernameChangedHandler = (event, id) => {
    this.setState (
      {username: event.target.value}
    );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  render() {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
    };
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div> 
          {this.state.persons.map((person, index) => {
            return <Person
            click = {() => this.deletePersonHandler(index)} 
            name={person.name}
            age={person.age} 
            key={person.id} 
            changed = {(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Switch Name</button> 
        {persons}
        <UserOutput
          name ={this.state.username}
        />
        <UserInput changed = {this.usernameChangedHandler} name = {this.state.username}/>
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
