import * as actionTypes from './actionTypes';
import TruckCareApi from '../api/TruckCareApi';
import * as GlobalErrorActions from './GlobalErrorActions';
import MessageFactory from '../factories/MessageFactory';

export const loadGroupSuccess = (truckCareGroup) => {
    return {type: actionTypes.GET_TRUCK_CARE_GROUP_SUCCESS, truckCareGroup};
};

export const loadTruckCareGroup = () => {
    return (dispatch) => {
        return TruckCareApi.getTruckCareGroup().then(activeGroup => {
            dispatch(loadGroupSuccess(activeGroup));
        }).catch(error => {
            dispatch(GlobalErrorActions.setGlobalError(MessageFactory.createGetActiveGroupFailure()));
        });
    };
};
