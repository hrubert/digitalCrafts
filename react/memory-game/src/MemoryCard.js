import React, { Component } from 'react';
import './MemoryCard.css';
import logo from './logo.png';


class MemoryCard extends Component {
  constructor() {
    super();
    this.state = { 
      isFlipped: false,
     };
  }
  clickHandler() {
    this.setState({ isFlipped: !this.state.isFlipped});
  }
  
  render() {
    let memoryCardInnerClass = 'MemoryCardInner';
    if (this.state.isFlipped) {
      memoryCardInnerClass += " flipped";
    }
    return (
      <div class="MemoryCard" onClick={this.clickHandler.bind(this)}>
          <div class={memoryCardInnerClass}>
              <div class="MemoryCardBack">
                  <img src={logo} alt=""/>
              </div>
              <div class="MemoryCardFront">
                ∆
              </div>
          </div>
      </div>
    );
  }
}

export default MemoryCard;
