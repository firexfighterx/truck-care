import * as actions from './ActionTypes';

export function setGlobalError(globalErrorNotification) {
    return {type: actions.SET_GLOBAL_ERROR, globalErrorNotification};
}
