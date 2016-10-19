import * as types from '../actions/ActionTypes';
import initialState from './InitialState';

export default function CategoryDetailReducer(state = initialState.categoryDetails, action) {
    if (action.type === types.GET_CATEGORY_DETAILS_SUCCESS) {
        return action.categoryDetails;
    }
    return state;
}
