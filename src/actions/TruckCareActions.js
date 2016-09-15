import {
    push
} from 'react-router-redux';
import {
    browserHistory
} from 'react-router';
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
            if (trucks.length > 0) {
                let url = `/TruckDetail/${trucks[0].truckNumber}`;
                browserHistory.push(url);
            }
        }).catch(error => {
            dispatch(loadTrucksFailure(error));
        });
    };
}
