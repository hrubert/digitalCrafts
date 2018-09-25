import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
  };

//   handleToggle = value => () => {
//     const { checked } = this.state;
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     this.setState({
//       checked: newChecked,
//     });
//   };

  render() {
    // const { classes } = this.props;
    let listitems = this.props.cart.map( hero => {
            return (
            <ListItem key={hero.id} dense button >
            <Avatar alt="" src={hero.heroURL} />
            <ListItemText primary={hero.heroName} />
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => this.props.handleDeleteFromCart(hero)}>
                    <DeleteIcon fontSize="small" />
                </IconButton>             
            </ListItemSecondaryAction>
            </ListItem>
        )
        })
    return (
      <div>
        <List>
            {listitems}
            <ListItem dense button>
              <ListItemText primary="Total cost in cart:" /> 
              <ListItemSecondaryAction>
                  $ {this.props.total}
              </ListItemSecondaryAction>                             
            </ListItem>
        </List>
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);