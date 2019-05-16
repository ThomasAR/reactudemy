import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

state = {
  persons: [
    { name: 'Person One'},
    { name: 'Person Two'}
  ]
}

//used as an event handler
switchNameHandler = (newName) => {
  // console.log("was clicked");
  //DON'T DO THIS this.state.persons[0].name = "Changed Person";
  this.setState({persons: [
    {name: newName},
    {name: 'Changed Person Two'}
  ]});
  };


  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: "Input text"},
      {name: event.target.value}
    ]});
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    };
    return (
      <div className="App">
        <Person
          name={this.state.persons[0].name}
          click={this.switchNameHandler.bind(this, "Name!")}/>
        <Person
          name={this.state.persons[1].name}
          click={this.switchNameHandler.bind(this, "Name!")}
          changed={this.nameChangedHandler}>Hello</Person>
        <button 
        style={style}
        onClick={() => this.switchNameHandler("Name!!")}>Switch Name</button>
      </div>
    );
          }

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is a header'), 'Hello! React apps are cool');
  }

export default App;

// state = {
//   persons: [
//     { name: 'Person One'},
//     { name: 'Person Two'}
//   ]
// }

// //used as an event handler
// switchNameHandler = () => {
//   // console.log("was clicked");
//   //DON'T DO THIS this.state.persons[0].name = "Changed Person";
//   this.setState({persons: [
//     {name: 'Changed Person'},
//     {name: 'Changed Person Two'}
//   ]});
// }