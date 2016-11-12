import * as types from '../actions/Actions';
import State from './State';

export default function CategoryDetailReducer(state = State.categoryDetails, action) {
    if (action.type === types.GET_CATEGORY_DETAILS_SUCCESS) {
        return action.categoryDetails;
    }
    return state;
}
