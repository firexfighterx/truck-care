import assert from 'assert';
import * as TruckActions from '../../actions/TruckIdActions';

describe('TruckIdActions', () => {
    describe('setTruckId', () => {
        it('returns a SET_ACTIVE_TRUCK item to dispatch', () => {
            const truckId = 10;
            const expected = {
                type: 'SET_TRUCK_ID',
                truckId
            };

            let actual = TruckActions.setTruckId(truckId);

            assert.deepEqual(actual, expected, 'returned object to dispatch');
        });
    });
});