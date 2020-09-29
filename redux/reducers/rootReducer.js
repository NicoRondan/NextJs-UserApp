import loadingReducer from './loadingReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    loading: loadingReducer
});

export default rootReducer;