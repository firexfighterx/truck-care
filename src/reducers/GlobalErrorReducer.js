import * as types from '../actions/ActionTypes';
import initialState from './InitialState';

export default function GlobalErrorReducer(state = initialState.globalErrorNotification, action) {
    if (action.type === types.SET_GLOBAL_ERROR) {
        return action.globalErrorNotification;
    }
    return state;
}
