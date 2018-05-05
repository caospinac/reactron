import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormExample from './components/FormExample';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reactron</h1>
        </header>
        <FormExample />
      </div>
    );
  }
}

export default App;
