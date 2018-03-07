import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import AuthReducer from './shared/Auth/reducer';
import { UsersReducer } from './shared/Users';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  auth: AuthReducer,
  users: UsersReducer,
});

export default rootReducer;
