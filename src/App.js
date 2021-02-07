import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Signup'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      
        </div>
        <Signup/>
      </div>
    );
  }
}

export default App;
