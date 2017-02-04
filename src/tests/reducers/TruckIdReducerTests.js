import assert from 'assert';
import * as Actions from '../../actions/TruckIdActions';
import TruckIdReducer from '../../reducers/TruckIdReducer';

describe('TruckIdReducer', () => {
    describe('Default TruckIdReducer', () => {
        it('returns new state when initial state is empty', () => {
            const intialState = 0;
            const newState = 2412;

            const action = Actions.setTruckId(newState);

            let actual = TruckIdReducer(intialState, action);

            assert.strictEqual(actual, newState, 'new state was returned');
        });

        it('returns new state when previous state exists', () => {
            const intialState = 2413;
            const newState = 2412;

            const action = Actions.setTruckId(newState);

            let actual = TruckIdReducer(intialState, action);

            assert.strictEqual(actual, newState, 'new state was returned');
        });

        it('returns previous state when action type is unknown', () => {
            const intialState = 0;
            const newState = 2400;

            const action = {
                type: 'UNKNOWN',
                truckId: newState
            };

            let actual = TruckIdReducer(intialState, action);

            assert.strictEqual(actual, intialState, 'previous state was maintained');
        });
    });
});