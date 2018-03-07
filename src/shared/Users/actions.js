import axios from 'axios';

import { LIST_USERS, CREATE_USER, DELETE_USER } from './actionTypes';
import { API_URL } from '../../config/index';

export function getUsers(user) {
  const request = axios.get(`${API_URL}/priv/users`);
  return async (dispatch) => {
    try {
      const users = await request;
      dispatch({
        type: LIST_USERS,
        payload: users.data,
      });
    } catch (err) {}
  };
}
