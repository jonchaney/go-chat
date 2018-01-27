import merge from 'lodash/merge';

const defaultState = {};

const DefaultReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case "DEFAULT":
      return;
    default:
      return state;
  }
};

export default DefaultReducer;