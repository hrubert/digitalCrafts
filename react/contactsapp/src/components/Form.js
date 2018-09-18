import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {

  render() {
    const { classes } = this.props;   

    return (
    <div>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          type="text"
          ref="name"
          margin="normal"
        />
        {/* <TextField
          id="email"
          label="Email"
          className={classes.textField}          
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
          id="phone"
          label="Phone Number"
          className={classes.textField}
          value={this.state.phone}
          onChange={this.handleChange('phone')}
          margin="normal"
        />
        <TextField
          id="address"
          label="Address"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          value={this.state.address}
          onChange={this.handleChange('address')}
        />
        <TextField
          id="city"
          label="City"
          value={this.state.city}
          onChange={this.handleChange('city')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="state"
          label="State"
          value={this.state.state}
          onChange={this.handleChange('state')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="zip"
          label="Zip Code"
          value={this.state.zip}
          onChange={this.handleChange('zip')}
          className={classes.textField}
          margin="normal"
        /> */}
        <Button variant="raised" color="secondary" className={classes.button} style={{marginTop: "15px"}} type="submit">
        Add Contact
      </Button>
      </form>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);