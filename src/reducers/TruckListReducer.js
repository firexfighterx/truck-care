import * as types from '../actions/Actions';
import State from './State';

export default function TruckListReducer(state = State.trucks, action) {
    switch (action.type) {
        case types.GET_ALL_TRUCKS_SUCCESS:
            return action.trucks;
        default:
            return state;
    }
}
