import React, { Component } from 'react';


class Form extends Component{
    state = {
        name: '',
    };



    handleChange = e => {
        this.setState({ name: e.currentTarget.value });

    };
    
    handleSubmit = e => {
        e.preventDefault();
       
        this.props.onSubmit(...this.state.name);
    
        this.setState({ name: '' });
    };
 

    render(){
        console.log(this.state.name);
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="name"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    id={this.nameInputId}
                    />

                <button type="submit" className="Form__button">
                Add contact
                </button>
            </form>
        
        
        );


    }  
}

export default Form;