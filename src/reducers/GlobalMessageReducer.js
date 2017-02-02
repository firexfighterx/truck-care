import * as types from '../actions/Actions';
import initialState from './InitialState';

export default function GlobalMessageReducer(state = initialState.globalMessage, action) {
    if (action.type === types.SET_GLOBAL_ERROR || action.type === types.SET_GLOBAL_SUCCESS) {
        return action.globalMessage;
    }
    return state;
}
