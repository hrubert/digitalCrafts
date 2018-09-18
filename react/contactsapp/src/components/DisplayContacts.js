import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ContactItem from './ContactItem.js';
const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
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

class DisplayContacts extends React.Component {

    render() {
    let ContactItems = this.props.contacts.sort(compareNames).map((contact) => {
        return <ContactItem key={contact.id} contact={contact} />
    })
    return (
        <div>
            {ContactItems}
        </div>
    )
    }
}

DisplayContacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayContacts);