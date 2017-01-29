import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
import * as types from './Actions';
import TruckCareApi from '../api/TruckCareApi';
import * as GlobalMessageActions from './GlobalMessageActions';
import MessageFactory from '../factories/MessageFactory';

export function loadTrucksSuccess(trucks) {
    return {type: types.GET_ALL_TRUCKS_SUCCESS, trucks};
}

export function loadTrucks() {
    return (dispatch) => {
        return TruckCareApi.getAllTrucks().then(trucks => {
            dispatch(loadTrucksSuccess(trucks));
            if (trucks.length > 0) {
                let url = `/TruckDetail/${trucks[0].truckNumber}`;
                browserHistory.push(url);
            }
        }).catch(error => {
            dispatch(GlobalMessageActions.setGlobalError(MessageFactory.createGetTrucksFailure()));
        });
    };
}
