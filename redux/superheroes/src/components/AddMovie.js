import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import uuid from 'uuid'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class AddMovie extends React.Component {
    state = {
        name: '',
        url: ''
    }
    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
      render() {
        const { classes } = this.props;
    
        return (
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="outlined-name"
              label="Movie Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
            <Button 
            onClick = {() => this.props.handleAddHero({
              heroName: this.state.name,
              heroURL: this.state.url,
              id: uuid.v4()
            })}
            variant="fab" color="primary" aria-label="Add" className={classes.button}>
              <AddIcon />
            </Button>
          </form>
        );
    }
}

export default withStyles(styles)(AddMovie);
