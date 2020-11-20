import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { filterContacts, clearFilter } from '../../actions/contactActions';

const ContactFilter = (filterContacts, clearFilter, filtered) => {
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

const mapStateToProps = state => ({
  filtered: state.contact.filtered
});

export default connect(mapStateToProps, { filterContacts, clearFilter })(
  ContactFilter
);
