import React, { Component } from 'react';


class MovieList extends Component {
  render() {
      let movies = this.props.heroList.map(hero => {
        return (
            <div>
                <row>
                  <h1 style={{textAlign: 'center'}} key={hero.id}>{hero.heroName}</h1>
                  <h3 style={{textAlign: 'center'}} key={hero.id}>${hero.price}</h3>                   
                  {/* <IconButton aria-label="Delete" onClick={() => this.props.handleDeleteHero({
                        heroName: hero.heroName,
                        heroURL: hero.heroURL,
                        id: hero.id
                      })}>
                      <DeleteIcon />
                  </IconButton> */}
                </row>
                <a onClick={() => this.props.handleAddToCart(hero)}><img key={hero.imdb} src={hero.heroURL} alt="Movie Poster" style={{height: "300px"}}/></a>
            </div>
        )
      })
    return (
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {movies}
      </div>
    );
  }
}

export default MovieList;