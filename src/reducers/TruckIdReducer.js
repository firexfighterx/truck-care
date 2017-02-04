import initialState from './InitialState';
import * as types from '../actions/Actions';
export default (state = initialState.truckId, action) => {
    if (action.type === types.SET_TRUCK_ID) {
        return action.truckId;
    }
    return state;
};