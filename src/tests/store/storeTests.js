import assert from 'assert';
import {createStore} from 'redux';
import rootReducer from '../../reducers';
import initialState from '../../reducers/InitialState';
import * as truckCareActions from '../../actions/TruckListActions';
import * as truckCareGroupActions from '../../actions/TruckCareGroupActions';
import * as globalErrorActions from '../../actions/GlobalErrorActions';
import * as categoryDetailActions from '../../actions/CategoryDetailActions';

describe('Store', function() {
    it('should update store with dispatched trucks', () => {
        const store = createStore(rootReducer, initialState);
        let trucks = [
            {
                id: 1,
                truckName: '2400'
            }
        ];

        let action = truckCareActions.loadTrucksSuccess(trucks);
        store.dispatch(action);

        let actual = store.getState().trucks;
        assert.deepEqual(actual, trucks, 'trucks was set on the state store');
    });

    it('should update store with dispatched global error', () => {
        let store = createStore(rootReducer, initialState);

        let globalErrorNotification = {
            type: 'danger',
            message: 'Yo this is a message'
        };

        let action = globalErrorActions.setGlobalError(globalErrorNotification);
        store.dispatch(action);

        let actual = store.getState().globalErrorNotification;

        assert.deepEqual(actual, globalErrorNotification, 'global error notification was set on the store');
    });

    it('should update store with dispatched truck care group', () => {
        let store = createStore(rootReducer, initialState);

        let truckCareGroup = {
            groupName: 'Foo',
            members: []
        };

        let action = truckCareGroupActions.loadTruckCareGroupSuccess(truckCareGroup);
        store.dispatch(action);

        let actual = store.getState().truckCareGroup;

        assert.deepEqual(actual, truckCareGroup, 'truck care group was set on the store');
    });

    it('should update store with dispatched category details', () => {
        let store = createStore(rootReducer, initialState);
        let detail = {
            category: "Truck Essentials",
            responsibilities: [
                {
                    responsibilityId: 1,
                    truckNumber: "2412",
                    category: "Truck Essentials",
                    responsibility: "Truck Inventory"
                }
            ]
        };
        let categoryDetails = [detail];

        let action = categoryDetailActions.loadCategoryDetailsSuccess(categoryDetails);

        store.dispatch(action);

        let actual = store.getState().categoryDetails;

        assert.deepEqual(actual, categoryDetails, 'category details were set on the store');
    });
});
