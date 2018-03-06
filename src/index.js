import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import jwt from 'jsonwebtoken';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { setCurrentUser } from './actions/Auth';
import setAuthToken from './utils/setAuthToken';

import reducers from './reducers';

const store = createStore(reducers, compose(applyMiddleware(ReduxThunk)));
//const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
