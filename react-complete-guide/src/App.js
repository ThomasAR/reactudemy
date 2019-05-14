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
  switchNameHandler = () => {
    // console.log("was clicked");
    //DON'T DO THIS this.state.persons[0].name = "Changed Person";
    this.setState({persons: [
      {name: 'Changed Person'},
      {name: 'Changed Person Two'}
    ]});
  }
  render() {
    return (
      <div className="App">
        <Person name={this.state.persons[0].name}/>
        <Person name={this.state.persons[1].name}>Hello</Person>
        <button onClick={this.switchNameHandler}>Switch Name</button>
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is a header'), 'Hello! React apps are cool');
  }
}

export default App;
