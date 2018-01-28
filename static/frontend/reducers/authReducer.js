import merge from 'lodash/merge';
import {
  RECEIVE_USER,
} from '../actions/authActions';

const nullUser = {
  username: null,
  email: null
};

const AuthReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState =  { username: action.username, email: action.email };
  switch (action.type) {
    case RECEIVE_USER:
      return newState;
    default:
      return state;
  }
};

export default AuthReducer;