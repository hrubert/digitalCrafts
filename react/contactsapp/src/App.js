import React, { Component } from 'react';
import './App.css';
import AppBar from './AppBar';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Form />
      </div>
    );
  }
}

export default App;
