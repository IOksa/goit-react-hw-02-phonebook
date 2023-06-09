import PropTypes from 'prop-types';

const ContactsList = ({contacts, onDeleteContact})=>(
    <>
    <h2>Contacts</h2>
    <ul>
        {contacts.map(({id, name, number})=>(
            <li key={id}>
                <p>{name}: </p>
                <p>{number}</p>
                <button
                type="button"
                onClick={() => onDeleteContact(id)}
                >
                Delete
                </button>
            </li>
        
        ))}
    </ul>
    </>
);

export default ContactsList;

ContactsList.propTypes={
    contacts: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        name:  PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired,
}; 