import React, { Component } from 'react';
import './MemoryCard.css';
import logo from './logo.png';


class MemoryCard extends Component {
  render() {
    return (
        <div class="MemoryCard">
            <img src={logo} />
        </div>
    );
  }
}

export default MemoryCard;
