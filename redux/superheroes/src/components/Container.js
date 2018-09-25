import React, { Component } from 'react';
import SimpleAppBar from "./AppBar";
import MovieList from "./MovieList";
// import AddMovie from "./AddMovie";
import Cart from "./Cart";

class Container extends Component {
  componentWillMount() {
    fetch('http://www.omdbapi.com/?t=batman&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
    fetch('http://www.omdbapi.com/?t=superman&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
    fetch('http://www.omdbapi.com/?t=spider-man&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
    fetch('http://www.omdbapi.com/?t=deadpool&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
    fetch('http://www.omdbapi.com/?t=black-panther&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
    fetch('http://www.omdbapi.com/?t=wonder-woman&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
    fetch('http://www.omdbapi.com/?t=the-avengers&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
    fetch('http://www.omdbapi.com/?t=logan&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
    fetch('http://www.omdbapi.com/?t=ant-man&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
    fetch('http://www.omdbapi.com/?t=doctor-strange&apikey=2a1404e1')
    .then((response => response.json()))
    .then(response => this.props.onFetch(response))
  }
  render() {
    return (
      <div className="App">
        <SimpleAppBar handleAddHero={this.props.onAddHero}/>
        <Cart cart={this.props.cart} total={this.props.total} handleDeleteFromCart={this.props.onDeleteFromCart}/>
        <hr />
        <MovieList heroList={this.props.heroList} handleDeleteHero={this.props.onDeleteHero} handleAddToCart={this.props.onAddToCart}/>
      </div>
    );
  }
}

export default Container;