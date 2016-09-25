import * as actionTypes from './actionTypes';
import TruckCareApi from '../api/TruckCareApi';
import * as GlobalErrorActions from './GlobalErrorActions';
import MessageFactory from '../factories/MessageFactory';

export const loadTruckCareGroupSuccess = (truckCareGroup) => {
    return {type: actionTypes.LOAD_TRUCK_CARE_GROUP_SUCCESS, truckCareGroup};
};

export const loadTruckCareGroup = () => {
    return (dispatch) => {
        return TruckCareApi.getTruckCareGroup().then(activeGroup => {
            dispatch(loadTruckCareGroupSuccess(activeGroup));
        }).catch(error => {
            dispatch(GlobalErrorActions.setGlobalError(MessageFactory.createGetActiveGroupFailure()));
        });
    };
};
