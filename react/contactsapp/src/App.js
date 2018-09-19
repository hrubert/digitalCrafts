import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar';
import Form from './components/Form';
import DisplayContacts from './components/DisplayContacts';
import uuid from 'uuid';
import EditContact from './components/EditContact';
import ToggleDisplay from 'react-toggle-display'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList:[],
      show: false,
      contact: '',
      contactIndex: ''
    }
  }

  componentWillMount() {
    this.setState({
      contactList: [{
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

  handleAddContact(sentContact) {
    let newContact = this.state.contactList;
    newContact.push(sentContact);
    this.setState({contactList: newContact});
  }

  handleDeleteContact(id) {
    let contact = this.state.contactList;
    let index = contact.findIndex(x => x.id === id);
    contact.splice(index, 1);
    this.setState({contactList: contact, contactIndex: index, show: false});
  }

  handleEditContact(id) {
    let updatedContacts = this.state.contactList;
    let index = updatedContacts.findIndex(x => x.id === id);
    let contactToEdit = updatedContacts[index];
    this.setState({contact: contactToEdit, show: true, contactIndex: index})
  }

  handleContactUpdated(updatedContact) {
    let updatedContacts = this.state.contactList;
    let index = this.state.contactIndex;
    updatedContacts.splice(index, 1, updatedContact);
    this.setState({contactList: updatedContacts, show: false})
  }

  render() {
    return (
      <div>
        <AppBar />
        <DisplayContacts 
          onDeleteContact={this.handleDeleteContact.bind(this)} 
          onEditContact={this.handleEditContact.bind(this)}
          contacts={this.state.contactList} />
        <Form addContact={this.handleAddContact.bind(this)}/>
        <ToggleDisplay show={this.state.show}>
            <EditContact 
              contact={this.state.contact} 
              updateContact={this.handleContactUpdated.bind(this)}/>
        </ToggleDisplay>
      </div>
    );
  }
}

export default App;
