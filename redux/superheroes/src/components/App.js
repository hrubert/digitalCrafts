import React, { Component } from 'react';
import SimpleAppBar from "./AppBar";
import MovieList from "./MovieList";

class App extends Component {
  render() {
    console.log(this.props.heroList);
    return (
      <div className="App">
        <SimpleAppBar/>
        {/* <MovieList heroList={this.props.heroList}/> */}
      </div>
    );
  }
}

export default App;
