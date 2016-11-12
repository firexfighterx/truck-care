import * as types from '../actions/Actions';
import State from './State';

export default function TruckCareGroupReducer(state = State.truckCareGroup, action) {
    if (action.type === types.LOAD_TRUCK_CARE_GROUP_SUCCESS) {
        return Object.assign({}, state, action.truckCareGroup);
    }
    return state;
}
