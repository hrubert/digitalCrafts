import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class ContactItem extends React.Component {

    handleDelete(id) {
      this.props.onDelete(id);
    }
  
    render () {
      const { classes } = this.props;
    return ( 
      <ExpansionPanel key={this.props.contact.id}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={styles.heading}>{this.props.contact.name} - {this.props.contact.city}, {this.props.contact.state}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
        Phone: {this.props.contact.phone} <br />
        Address: {this.props.contact.address}, {this.props.contact.city}, {this.props.contact.state}, {this.props.contact.zip}
        <a onClick={this.handleDelete.bind(this, this.props.contact.id)}><IconButton className={classes.button} aria-label="Delete">
          <DeleteIcon />
        </IconButton></a>
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    )
  }
}

ContactItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (ContactItem)