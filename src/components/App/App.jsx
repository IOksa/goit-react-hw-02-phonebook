import React, {Component} from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import ContactsList from '../ContactsList/ContactsList';

class App extends Component{
  state = {
    contacts: [],
    name: ''
  }

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,

    };

    console.log("this.setState=",this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    })));
    console.log("contact App=", contact);
    console.log(this.contacts);
  };

  render(){
    return(
    <>
    <h1>Phonebook</h1>
    <div>
        <p>Name</p>
        <Form onSubmit={this.addContact}/>
    </div>
    <div>
      <p>Contacts</p>
      <ContactsList contacts={this.contacts} />
    </div>
    </>
    );
  }
}

export default App;
