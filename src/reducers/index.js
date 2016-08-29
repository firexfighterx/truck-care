import {
    combineReducers
} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import truckCare from './TruckCareReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    truckCare
});

export default rootReducer;
