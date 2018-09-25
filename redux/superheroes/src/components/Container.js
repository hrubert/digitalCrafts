import React, { Component } from 'react';
import SimpleAppBar from "./AppBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import {addHero, deleteHero} from "../actions/index";

class Container extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar/>
        <AddMovie handleAddHero={this.props.onAddHero}/>
        <MovieList heroList={this.props.heroList} handleDeleteHero={this.props.onDeleteHero}/>
      </div>
    );
  }
}

export default Container;