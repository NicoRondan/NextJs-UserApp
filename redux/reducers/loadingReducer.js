import { IS_LOADING, NOT_LOADING } from '../actions/actionTypes';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
      case IS_LOADING:
        return (state = true);
      case NOT_LOADING:
        return (state = false);
      default:
        return state;
    }
  };

export { loadingReducer }