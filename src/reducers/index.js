import {
    combineReducers
} from 'redux';
import {
    routerReducer
} from 'react-router-redux';
import trucks from './TruckCareReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    trucks,
    routing: routerReducer
});

export default rootReducer;
