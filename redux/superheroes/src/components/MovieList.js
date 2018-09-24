import React, { Component } from 'react';

class MovieList extends Component {
  render() {
      let movies = this.props.heroList.map(hero => {
          return <h1>{hero.heroName}</h1>
      })
    return (
      <div>
          {movies}
      </div>
    );
  }
}

export default MovieList;