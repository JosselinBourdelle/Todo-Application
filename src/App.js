import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './model/TodoContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoContainer />
        </header>
      </div>
    );
  }
}

export default App;
