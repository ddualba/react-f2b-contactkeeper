import React, { Fragment } from 'react';
import spinner from './spinner.gif';

// with arrow functions if there is no other javascript you can
// return the Fragment directly, remove bracket & 'return '
export const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
