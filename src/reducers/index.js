import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import trucks from './TruckListReducer';
import truckCareGroup from './TruckCareGroupReducer';
import globalErrorNotification from './GlobalErrorReducer';
import categoryDetails from './CategoryDetailReducer';

const rootReducer = combineReducers({trucks, globalErrorNotification, truckCareGroup, categoryDetails, routing: routerReducer});

export default rootReducer;
