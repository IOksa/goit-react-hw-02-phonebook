import React, {Component} from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactsList from '../ContactsList/ContactsList';

class App extends Component{
  state = {
    contacts: [],

  }

  addContact = ({name, number})=> {
    const contact = {
      id: nanoid(),
      name,
      number,

    };
    console.log("addContact name=", name);
    console.log("addContact contact=", contact);
    this.setState(({ contacts }) => ({contacts: [ ...contacts, contact]}));
    console.log("this.state.contacts=", this.state);
  };

  render(){
    return(
    <>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={this.addContact}/>

    <div>
      <h2>Contacts</h2>
      <ContactsList contacts={this.state.contacts} />
    </div>
    </>
    );
  }
}

export default App;
