import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterContacts, clearFilter } from '../../actions/contactActions';

const ContactFilter = ({ filterContacts, clearFilter, filtered }) => {
  const text = useRef('');

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

ContactFilter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  filtered: PropTypes.object
};

const mapStateToProps = state => ({
  filtered: state.contact.filtered
});

export default connect(mapStateToProps, { filterContacts, clearFilter })(
  ContactFilter
);
