import React, { Component } from 'react';
import './MemoryCard.css';
import logo from './logo.png';


class MemoryCard extends Component {
  render() {
    let memoryCardInnerClass = 'MemoryCardInner';
    if (this.props.isFlipped) {
      memoryCardInnerClass += " flipped";
    }
    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
          <div className={memoryCardInnerClass}>
              <div className="MemoryCardBack">
                  <img src={logo} alt=""/>
              </div>
              <div className="MemoryCardFront">
                {this.props.symbol}
              </div>
          </div>
      </div>
    );
  }
}

export default MemoryCard;
