import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import MessageReducer from './messageReducer';

const RootReducer = combineReducers({
  currentUser: AuthReducer,
  messages: MessageReducer
});

export default RootReducer;