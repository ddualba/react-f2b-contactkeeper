import React, { Fragment, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem';
import Spinner from '../../components/layout/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';

const Contacts = ({ getContacts, contacts, filtered, loading }) => {
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

Contacts.propTypes = {
  getContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array,
  filtered: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts,
  filtered: state.contact.filtered,
  loading: state.contact.loading
});

export default connect(mapStateToProps, { getContacts })(Contacts);
