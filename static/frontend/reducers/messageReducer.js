import merge from 'lodash/merge';

import { CREATE_MESSAGE } from '../actions/messageActions';

const defaultState = {
  receievedMessages: []
};

const MessageReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case CREATE_MESSAGE:  
    newState.receievedMessages.push(action.data);
      return newState;
    default:
      return state;
  }
};

export default MessageReducer;