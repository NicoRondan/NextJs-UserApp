import { IS_RESPONSE, NOT_RESPONSE } from '../actions/actionTypes';

const responseReducer = (state = null, action) => {
    switch (action.type) {
      case IS_RESPONSE:
        return (state = true);
      case NOT_RESPONSE:
        return (state = false);
      default:
        return state;
    }
  };

export { responseReducer }