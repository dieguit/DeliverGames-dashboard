import axios from 'axios';

import { LIST_USERS, CREATE_USER, DELETE_USER, UPDATE_USER, SET_MODAL_STATUS, SET_EDIT_USER } from './actionTypes';
import { API_URL } from '../../config/index';

export function getUsers() {
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

export function createUser(user) {
  // Bypass a public register verification
  user.password2 = user.password;
  const request = axios.post(`${API_URL}/rest/register`, user);
  return async (dispatch) => {
    try {
      const createdUser = await request;
      return dispatch({
        type: CREATE_USER,
        payload: createdUser.data.user,
      });
    } catch (err) {}
  };
}

export function updateUser(user) {
  const request = axios.put(`${API_URL}/priv/users/${user.id}`, user);
  return async (dispatch) => {
    try {
      await request;
      return dispatch({
        type: UPDATE_USER,
        payload: user,
      });
    } catch (err) {}
  };
}

export function deleteUser(id) {
  const request = axios.delete(`${API_URL}/priv/users/${id}`);
  return async (dispatch) => {
    try {
      await request;
      return dispatch({
        type: DELETE_USER,
        payload: id,
      });
    } catch (err) {}
  };
}

export function setEditUser(user) {
  return {
    type: SET_EDIT_USER,
    payload: user,
  };
}

export function setModalStatus(modalOpened) {
  return {
    type: SET_MODAL_STATUS,
    payload: modalOpened,
  };
}
