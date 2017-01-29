import * as actions from './Actions';

export function setGlobalError(globalMessage) {
    return { type: actions.SET_GLOBAL_ERROR, globalMessage };
}
}
