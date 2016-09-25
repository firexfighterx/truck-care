import * as actionTypes from './actionTypes';
import TruckCareApi from '../api/TruckCareApi';

export const loadGroupSuccess = (truckCareGroup) => {
    return {type: actionTypes.GET_TRUCK_CARE_GROUP_SUCCESS, truckCareGroup};
};

export const loadTruckCareGroup = () => {
    return (dispatch) => {
        return TruckCareApi.getTruckCareGroup().then(activeGroup => {
            dispatch(loadGroupSuccess(activeGroup));
        });
    };
};
