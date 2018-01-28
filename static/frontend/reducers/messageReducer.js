import merge from 'lodash/merge';

const defaultState = {};

const MessageReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case "DEFAULT":
      return;
    default:
      return state;
  }
};

export default MessageReducer;