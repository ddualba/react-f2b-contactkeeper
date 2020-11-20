import React, { useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
// import AuthContext from '../../context/auth/authContext';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/authActions';

const Home = ({ loadUser }) => {
  // const authContext = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default connect(null, { loadUser })(Home);
