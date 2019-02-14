import React, { Component } from 'react';
import './App.css';
import PersonList from './Components/personlist';
import PersonInput from './Components/personinput';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PersonInput />
        <PersonList />
      </div>
    );
  }
}

export default App;
