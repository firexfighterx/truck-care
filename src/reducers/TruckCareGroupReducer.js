import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function TruckCareGroupReducer(state = initialState.truckCareGroup, action) {
    if (action.type === types.LOAD_TRUCK_CARE_GROUP_SUCCESS) {
        return Object.assign({}, state, action.truckCareGroup);
    }
    return state;
}
