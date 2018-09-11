import React, { Component } from 'react';
import './App.css';
import Hello from './Hello.js';

let friends = [{name: 'Tracy', age: 30}, {name: 'Levi', age: 28}, {name: 'Skittles', age: 20}]
let listFriends = friends.map(friend => 
  <li>{friend.name}, {friend.age}, {(friend.age < 21 ? 'Able to party at the MoonTower' : 'Under age')}</li>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello name="Tracy"/>
        <h2>Here is your friend report:</h2>
        <ul>{listFriends}</ul>
      </div>
    );
  }
}

export default App;
