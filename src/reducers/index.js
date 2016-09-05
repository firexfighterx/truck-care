import {
    combineReducers
} from 'redux';
import trucks from './TruckCareReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    trucks
});

export default rootReducer;
