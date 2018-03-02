import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import UsersReducer from './UsersReducer';
import ActiveUserReducer from './ActiveUserReducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  users: UsersReducer,
  activeUser: ActiveUserReducer,
});

export default rootReducer;
