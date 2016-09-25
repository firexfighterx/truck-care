import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import trucks from './TruckListReducer';
import truckCareGroup from './TruckCareGroupReducer';
import globalErrorNotification from './GlobalErrorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({ajaxCallsInProgress, trucks, globalErrorNotification, truckCareGroup, routing: routerReducer});

export default rootReducer;
