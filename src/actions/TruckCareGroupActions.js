import * as actionTypes from './ActionTypes';
import TruckCareApi from '../api/TruckCareApi';
import * as GlobalErrorActions from './GlobalErrorActions';
import MessageFactory from '../factories/MessageFactory';

export function loadTruckCareGroupSuccess(truckCareGroup) {
    return {type: actionTypes.LOAD_TRUCK_CARE_GROUP_SUCCESS, truckCareGroup};
}

export function loadTruckCareGroup() {
    return (dispatch) => {
        return TruckCareApi.getTruckCareGroup().then(activeGroup => {
            dispatch(loadTruckCareGroupSuccess(activeGroup));
        }).catch(error => {
            dispatch(GlobalErrorActions.setGlobalError(MessageFactory.createGetActiveGroupFailure()));
        });
    };
}
