import { LOGIN_FAIL, LOGIN_SUCCESS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state
      };

    default:
      return state;
  }
};
