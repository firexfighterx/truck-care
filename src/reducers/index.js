import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import trucks from './TruckListReducer';
import truckCareGroup from './TruckCareGroupReducer';
import globalMessage from './GlobalMessageReducer';
import categoryDetails from './CategoryDetailReducer';
import truckId from './TruckIdReducer';

const rootReducer = combineReducers({trucks, globalMessage, truckCareGroup, categoryDetails, truckId, routing: routerReducer});

export default rootReducer;
