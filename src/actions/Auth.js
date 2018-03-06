import axios from 'axios';

import setAuthToken from '../utils/setAuthToken';
import { SET_CURRENT_USER } from './ActionTypes';
import { API_URL } from '../config';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
}

export function Login(user) {
  const request = axios.post(`${API_URL}/rest/login`, user);
  return async (dispatch) => {
    try {
      const res = await request;
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(setCurrentUser(res.data.user));
    } catch (err) {
      return {
        type: 'LOGIN_FAILED',
        err: 'Login failed',
      };
    }
  };
}

export function Logout() {
  return async (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthToken(null);
    dispatch(setCurrentUser({}));
  };
}
