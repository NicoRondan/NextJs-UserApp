import { combineReducers } from "redux";
import { loadingReducer } from './loadingReducer';
import { responseReducer } from './responseReducer';
import { msgReducer } from './msgReducer';

//Root Reducer

const rootReducer = () => {
  return combineReducers({
    loading: loadingReducer,
    response: responseReducer,
    msg: msgReducer,
  });
};

export default rootReducer;
