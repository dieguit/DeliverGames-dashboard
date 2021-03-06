import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux';

import AuthReducer from './shared/Auth/reducer';
import { UsersReducer } from './shared/Users';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  notifications,
  auth: AuthReducer,
  users: UsersReducer,
});

export default rootReducer;
