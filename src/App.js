import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sketchpad from 'sketchpad/lib/sketchpad';

class App extends Component {
  componentDidMount() {
    this.sketchpad = new Sketchpad({
      element: '#sketchpad',
      width:400,
      height:400
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <canvas id="sketchpad"></canvas>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
