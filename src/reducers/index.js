import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import trucks from './TruckListReducer';
import truckCareGroup from './TruckCareGroupReducer';
import globalErrorNotification from './GlobalErrorReducer';

const rootReducer = combineReducers({trucks, globalErrorNotification, truckCareGroup, routing: routerReducer});

export default rootReducer;
