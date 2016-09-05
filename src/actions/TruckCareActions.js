import * as types from './actionTypes';
import TruckCareApi from '../api/TruckCareApi';
import {
    beginAjaxCall,
    ajaxCallError
} from './ajaxStatusActions';

export function loadTrucksSuccess(trucks) {
    return {
        type: types.GET_ALL_TRUCKS_SUCCESS,
        trucks
    };
}

export function loadTrucksFailure(error) {
    return {
        type: types.GET_ALL_TRUCKS_FAILURE,
        error
    };
}

export function loadTrucks() {
    return (dispatch) => {
        dispatch(beginAjaxCall());
        return TruckCareApi.getAllTrucks().then(trucks => {
            dispatch(loadTrucksSuccess(trucks));
        }).catch(error => {
            dispatch(loadTrucksFailure(error));
        });
    };
}
