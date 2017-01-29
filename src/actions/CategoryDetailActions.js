import * as Actions from './Actions';
import TruckCareApi from '../api/TruckCareApi';
import * as GlobalMessageActions from './GlobalMessageActions';
import MessageFactory from '../factories/MessageFactory';

export const loadCategoryDetailsSuccess = (categoryDetails) => {
    return {type: Actions.GET_CATEGORY_DETAILS_SUCCESS, categoryDetails};
};

export function loadCategoryDetail(truckNumber) {
    return (dispatch) => {
        return TruckCareApi.getCategoryDetails(truckNumber).then(categoryDetails => {
            dispatch(loadCategoryDetailsSuccess(categoryDetails));
        }).catch(error => {
            dispatch(GlobalMessageActions.setGlobalError(MessageFactory.createGetCategoryDetailsFailure(truckNumber)));
        });
    };
}
