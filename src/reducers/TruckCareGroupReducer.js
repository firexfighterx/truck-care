import * as types from '../actions/ActionTypes';
import initialState from './InitialState';

export default function TruckCareGroupReducer(state = initialState.truckCareGroup, action) {
    if (action.type === types.LOAD_TRUCK_CARE_GROUP_SUCCESS) {
        return Object.assign({}, state, action.truckCareGroup);
    }
    return state;
}
