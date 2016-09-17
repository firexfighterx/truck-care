import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function GlobalErrorReducer(state = initialState.globalErrorNotification, action) {
    if (action.type === types.SET_GLOBAL_ERROR) {
        return action.globalErrorNotification;
    }
    return state;
}
