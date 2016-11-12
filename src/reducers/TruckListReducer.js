import * as types from '../actions/Actions';
import initialState from './InitialState';

export default function TruckListReducer(state = initialState.trucks, action) {
    switch (action.type) {
        case types.GET_ALL_TRUCKS_SUCCESS:
            return action.trucks;
        default:
            return state;
    }
}
