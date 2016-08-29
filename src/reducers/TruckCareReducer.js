import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function TruckCareReducer(state = initialState.trucks, action) {
    switch (action.type) {
        case types.GET_ALL_TRUCKS_SUCCESS:
            return action.trucks;
        default:
            return state;
    }
}
