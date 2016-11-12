import * as actions from './Actions';

export function setGlobalError(globalErrorNotification) {
    return {type: actions.SET_GLOBAL_ERROR, globalErrorNotification};
}
