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
    return (
      <div>
        <AppBar />
        <DisplayContacts contacts={this.state.contactList} />
        <Form />
      </div>
    );
  }
}

export default App;
