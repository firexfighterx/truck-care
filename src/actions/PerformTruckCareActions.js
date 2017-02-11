import TruckCareApi from '../api/TruckCareApi';
import * as GlobalMessageActions from '../actions/GlobalMessageActions';
import MessageFactory from '../factories/MessageFactory';
export function performTruckCare(args) {
    return (dispatch) => {
        return TruckCareApi.performTruckCare(args).then(() => {
            dispatch(GlobalMessageActions.setGlobalSuccess(MessageFactory.createPerformTruckCareSuccess()));
        }).catch(error => {
            dispatch(GlobalMessageActions.setGlobalError(MessageFactory.createPerformTruckCareFailure()));
        });
    };
}