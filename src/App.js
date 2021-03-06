import React, { Component } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Space Station
          {' '}
          <span className="purple-font">Tracker</span>
        </h1>
        <ISSLocation />
      </div>
    );
  }
}

export default App;