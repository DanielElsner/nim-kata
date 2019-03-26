import React, { Component } from 'react';
import './App.css';
import NimView from "./nim/NimView";


class App extends Component{
  render() {
    return (
      <div className="App">
          <h1>NIM-Spiel</h1>
          <NimView />
      </div>
    );
  }
}

export default App;
