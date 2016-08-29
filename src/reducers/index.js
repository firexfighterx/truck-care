import {
    combineReducers
} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import trucks from './TruckCareReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    ajaxCallsInProgress,
    trucks
});

export default rootReducer;
