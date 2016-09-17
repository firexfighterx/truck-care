import * as actions from './actionTypes';

export function setGlobalError(notification) {
    return {type: actions.SET_GLOBAL_ERROR, notification};
}
