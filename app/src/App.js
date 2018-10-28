import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Tiffany'},
      { name: 'Kris'},
      { name: 'Christopher'}
    ]
  }
  
  switchNameHandler = () => {
      this.setState({
      persons: [
        { name: 'Zhong' },
        { name: 'Lapu' },
        { name: 'Miranda' }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      color: 'red',
      font: 'inherit',
      border: '1px solid purple',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>First Names to Last Names </h1>
        <p>Click the SWITCH button to see last names!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler()}> SWITCH</button>
        <Person 
          name={this.state.persons[0].name} />
        <Person 
          name={this.state.persons[1].name} />
        <Person 
          name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;
