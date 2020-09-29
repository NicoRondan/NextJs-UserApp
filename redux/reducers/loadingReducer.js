import {IS_LOADING, NOT_LOADING} from '../actions/loadingActions';

const loadingReducer = (state = {value: false}, action) => {
    switch ( action.type ) {
        case IS_LOADING:
            return { ...state, value: true };
        case NOT_LOADING:
            return { ...state, value: false };
        default:
            return { ...state };
    }
};

export default loadingReducer;