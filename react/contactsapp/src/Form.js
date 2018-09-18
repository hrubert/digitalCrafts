import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import uuid from 'uuid';

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

function compareNames(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

class TextFields extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    initialContacts: []                              
  };

  componentWillMount() {
    this.setState({
      initialContacts: [{
        id: uuid.v4(),
        name: "Levi Herbert",
        email: "lherbert90@gmail.com",
        phone: '(832)-291-7066',
        address: '22400 Westheimer Pkwy, Apt 710',
        city: 'Katy',
        state: 'Texas',
        zip: '77450'
      }, {
        id: uuid.v4(),        
        name: "Tracy Herbert",
        email: "tracynherbert@gmail.com",
        phone: '(541)-990-0760',
        address: '22400 Westheimer Pkwy, Apt 710',
        city: 'Katy',
        state: 'Texas',
        zip: '77450'
      }]
    })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    if(this.state.name === ''){
      alert('Name can not be empty');
    } else {
      let arrayCopy = this.state.initialContacts;
      this.setState({
        initialContacts: arrayCopy.concat({
          id: uuid.v4(),
          name: this.state.name,
          email: this.state.event,
          phone: this.state.phone,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip
        })
      });
    }
    e.preventDefault();          
  };

  handleDelete(id) {
    console.log(this.key);
  }

  render() {
    const { classes } = this.props;
    let contacts = this.state.initialContacts;
    let contactsDisplay = contacts.sort(compareNames).map((contact) =>
      <ExpansionPanel key={contact.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{contact.name} - {contact.city}, {contact.state}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Phone: {contact.phone} <br />
          Address: {contact.address}, {contact.city}, {contact.state}, {contact.zip}
          <a href="#" onClick={this.handleDelete.bind(this)}><IconButton className={classes.button} aria-label="Delete">
            <DeleteIcon />
          </IconButton></a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )

    return (
    <div>
      <div className={classes.root}>
            {contactsDisplay}
        </div>
      <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
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
        />
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