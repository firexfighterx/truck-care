import * as Actions from './Actions';
import TruckCareApi from '../api/TruckCareApi';
import * as GlobalMessageActions from './GlobalMessageActions';
import MessageFactory from '../factories/MessageFactory';

export function loadTruckCareGroupSuccess(truckCareGroup) {
    return {type: Actions.LOAD_TRUCK_CARE_GROUP_SUCCESS, truckCareGroup};
}

export function updateTruckCareGroupMemberToActive(id) {
    return (dispatch) => {
        return TruckCareApi.updateTruckCareGroupMemberToActive(id).then(activeGroup => {
            dispatch(loadTruckCareGroupSuccess(activeGroup));
        }).catch(error => {
            dispatch(GlobalMessageActions.setGlobalError(MessageFactory.createFailedToUpdateMemberStatus()));
        });
    };
}

export function updateTruckCareGroupMemberToInactive(id) {
    return (dispatch) => {
        return TruckCareApi.updateTruckCareGroupMemberToInactive(id).then(activeGroup => {
            dispatch(loadTruckCareGroupSuccess(activeGroup));
        }).catch(error => {
            dispatch(GlobalMessageActions.setGlobalError(MessageFactory.createFailedToUpdateMemberStatus()));
        });
    };
}

export function loadTruckCareGroup() {
    return (dispatch) => {
        return TruckCareApi.getTruckCareGroup().then(activeGroup => {
            dispatch(loadTruckCareGroupSuccess(activeGroup));
        }).catch(error => {
            dispatch(GlobalMessageActions.setGlobalError(MessageFactory.createGetActiveGroupFailure()));
        });
    };
}
