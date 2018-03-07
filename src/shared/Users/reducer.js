import { LIST_USERS } from './actionTypes';

const initialState = {
  users: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LIST_USERS:
      return {
        users: action.payload,
      };
    default: return state;
  }
};
