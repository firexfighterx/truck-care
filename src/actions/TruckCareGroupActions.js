import * as actionTypes from './actionTypes';

export const loadGroupSuccess = (groupList) => {
    return {type: actionTypes.GET_TRUCK_CARE_GROUP_SUCCESS, groupList};
};
