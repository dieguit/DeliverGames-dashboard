import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import LoginReducer from './LoginReducer';
import ActiveUserReducer from './ActiveUserReducer';

const rootReducer = combineReducers({
  form: reduxFormReducer,
  login: LoginReducer,
  activeUser: ActiveUserReducer,
});

export default rootReducer;
