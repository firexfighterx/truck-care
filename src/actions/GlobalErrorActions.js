import * as actions from './actionTypes';

export function setGlobalError(globalErrorNotification) {
    return {type: actions.SET_GLOBAL_ERROR, globalErrorNotification};
}
