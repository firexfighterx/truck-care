import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import trucks from './TruckListReducer';
import globalErrorNotification from './GlobalErrorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({ajaxCallsInProgress, trucks, globalErrorNotification, routing: routerReducer});

export default rootReducer;
