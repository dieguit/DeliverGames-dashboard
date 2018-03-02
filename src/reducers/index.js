import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import ActiveUserReducer from './ActiveUserReducer';

const rootReducer = combineReducers({
  users: UsersReducer,
  activeUser: ActiveUserReducer,
});

export default rootReducer;
