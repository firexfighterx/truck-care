import assert from 'assert';
import {createStore} from 'redux';
import rootReducer from '../../reducers';
import initialState from '../../reducers/initialState';
import * as truckCareActions from '../../actions/TruckListActions';
import * as globalErrorActions from '../../actions/GlobalErrorActions';

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
});
