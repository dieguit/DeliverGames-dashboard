import { LIST_USERS, CREATE_USER, DELETE_USER, UPDATE_USER, SET_EDIT_USER, SET_MODAL_STATUS } from './actionTypes';

const initialState = {
  users: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LIST_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      const usersList = state.users.filter(item => (
        item.id !== action.payload
      ));
      return {
        ...state,
        users: usersList,
      };
    case UPDATE_USER:
      const index = state.users.findIndex(user => user.id === action.payload.id); console.warn('asdasd');

      return {
        ...state,
        users: [
          ...state.users.slice(0, index),
          action.payload,
          ...state.users.slice(index + 1),
        ],
      };
    case SET_EDIT_USER:
      return {
        ...state,
        editingUser: action.payload,
      };
    case SET_MODAL_STATUS:
      return {
        ...state,
        modalOpened: action.payload,
      };
    default: return state;
  }
};
