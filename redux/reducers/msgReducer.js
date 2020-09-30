import { SUCCESS_MESSAGE, ERROR_MESSAGE } from '../actions/actionTypes';

const msgReducer = (state = "", action) => {
    switch (action.type) {
      case SUCCESS_MESSAGE:
        return state =  action.text;
      case ERROR_MESSAGE:
        return state =  action.text;
      default:
        return state;
    }
  };

export { msgReducer }