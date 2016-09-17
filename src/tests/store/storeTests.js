import assert from 'assert';
import {createStore} from 'redux';
import rootReducer from '../../reducers';
import initialState from '../../reducers/initialState';
import * as truckCareActions from '../../actions/TruckListActions';

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
});
