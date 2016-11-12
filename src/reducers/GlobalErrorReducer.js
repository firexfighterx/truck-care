import * as types from '../actions/Actions';
import State from './State';

export default function GlobalErrorReducer(state = State.globalErrorNotification, action) {
    if (action.type === types.SET_GLOBAL_ERROR) {
        return action.globalErrorNotification;
    }
    return state;
}
