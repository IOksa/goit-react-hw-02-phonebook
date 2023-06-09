import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <label>
      Find contacts by name
      <input type="text" value={value} placeholder='search...' onChange={onChange} />
    </label>
  );
  
  export default Filter;

  Filter.propTypes={
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired, 
    
};