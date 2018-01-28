import { combineReducers } from 'redux';

import DefaultReducer from './defaultReducer';

const RootReducer = combineReducers({
  default: DefaultReducer
});

export default RootReducer;