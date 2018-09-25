import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


class MovieList extends Component {
  render() {
      let movies = this.props.heroList.map(hero => {
        return (
            <div>
                <row>
                  <h1 key={hero.heroURL}>{hero.heroTitle}</h1> 
                  <IconButton aria-label="Delete" onClick={() => this.props.handleDeleteHero({
                        heroName: hero.heroName,
                        heroURL: hero.heroURL
                      })}>
                      <DeleteIcon />
                  </IconButton>
                </row>
                <img key={hero.heroURL} src={hero.heroURL} alt="Movie Image" style={{height: "300px"}}/>
            </div>
        )
      })
    return (
      <div>
          {movies}
      </div>
    );
  }
}

export default MovieList;