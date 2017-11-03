import React, { Component } from 'react';
import GifList from './components/react/GifList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GifList />
      </div>
    );
  }
}

export default App;
