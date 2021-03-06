import React, {Component} from 'react';

import './App.css';
import Validation from './Components/Validation';
import Char from './Components/Char';


class App extends Component {
  
  state = {
    size: 0,
    text: ''
  };
  
  
   


  textChangeHandler = (event) => {
    this.setState({size: event.target.value.length, text: event.target.value});
  }

  charDeleteHandler = ( index ) => {
    const text = this.state.text.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({text: updatedText});
  }

  
  render() {
    let renderChars = (
      <div>
        {
          this.state.text.split('').map((ch, index) => {
            return <Char
            letter = {ch} key={index}
            clicked = {() => this.charDeleteHandler(index)}/>
          })
        }
      </div>
    )

  return (
    <div className="App">
      <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" onChange={(event) => this.textChangeHandler(event)} value= {this.state.text}/>
        <p>{this.state.size}</p>
        <Validation text={this.state.size}/>
        {renderChars}
    </div>
  );
  }
}

export default App;
