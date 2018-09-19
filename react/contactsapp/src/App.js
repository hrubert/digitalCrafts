import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar';
import Form from './components/Form';
import DisplayContacts from './components/DisplayContacts';
import uuid from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList:[]
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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleAddContact(sentContact) {
    let newContact = this.state.contactList;
    newContact.push(sentContact);
    this.setState({contactList: newContact});
  }

  handleDeleteContact(id) {
    let contact = this.state.contactList;
    let index = contact.findIndex(x => x.id === id);

    contact.splice(index, 1);
    this.setState({contactList: contact})
  }

  render() {
    return (
      <div>
        <AppBar />
        <DisplayContacts onDeleteContact={this.handleDeleteContact.bind(this)} contacts={this.state.contactList} />
        <Form addContact={this.handleAddContact.bind(this)}/>
      </div>
    );
  }
}

export default App;
