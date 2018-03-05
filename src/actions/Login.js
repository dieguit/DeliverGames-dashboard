import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';
import { SET_CURRENT_USER } from './ActionTypes';
import { API_URL } from '../config';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function Login(user) {
  const request = axios.post(`${API_URL}/rest/login`, user);
  return (dispatch) => {
    return request.then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(setCurrentUser(res.data.user));
    });
  };
};
