import React from 'react';
import PropTypes from 'prop-types';
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

class EditContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
        };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.contact.name !== this.props.contact.name){
            this.setState({name: nextProps.contact.name});
        }
        if(nextProps.contact.email !== this.props.contact.email){
            this.setState({email: nextProps.contact.email});
        }
        if(nextProps.contact.phone !== this.props.contact.phone){
            this.setState({phone: nextProps.contact.phone});
        }
        if(nextProps.contact.address !== this.props.contact.address){
            this.setState({address: nextProps.contact.address});
        }
        if(nextProps.contact.city !== this.props.contact.city){
            this.setState({city: nextProps.contact.city});
        }
        if(nextProps.contact.state !== this.props.contact.state){
            this.setState({state: nextProps.contact.state});
        }
        if(nextProps.contact.zip !== this.props.contact.zip){
            this.setState({zip: nextProps.contact.zip});
        }
    }

  handleSubmit = (e) => {
    if(this.state.name === ''){
      alert('Name can not be empty');
    } 
    else {
    this.setState({newContact: {
        id: this.props.contact.id,
        name: this.state.name,
        email: this.state.event,
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
    }}, function() {
      // console.log(this.state);
      this.props.updateContact(this.state.newContact);
    })
    }
    e.preventDefault();    
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;   
    return (
      <div>
          <h2 style={{textAlign: 'center', marginTop: '3em'}}>Edit Contact</h2>
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
        <Button variant="raised" color="primary" className={classes.button} style={{marginTop: "15px"}} type="submit">
        Edit Contact
      </Button>
      </form>
      </div>
    );
  }
}

EditContacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditContacts);