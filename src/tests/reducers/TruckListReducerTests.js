import sinon from 'sinon';
import assert from 'assert';
import * as actions from '../../actions/TruckCareActions';
import TruckCareReducer from '../../reducers/TruckListReducer';

describe('TruckListReducer', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('Default TruckListReducer', () => {
        it('returns a new state with trucks when intial state is empty', () => {
            let truck = {
                id: 1,
                truckName: '2400'
            };

            let trucks = [truck];
            let action = actions.loadTrucksSuccess(trucks);

            let actual = TruckCareReducer([], action);

            assert.deepEqual(actual, trucks, 'sets state with the provided list of trucks');
        });

        it('returns a new state with a new list of trucks when initial state has values', () => {
            let truck = {
                id: 1,
                truckName: '2400'
            };

            let intialStateTruck = {
                id: 2,
                truckName: '2495'
            };

            let trucks = [truck];
            let initialState = [intialStateTruck];
            let action = actions.loadTrucksSuccess(trucks);

            let actual = TruckCareReducer(initialState, action);

            assert.deepEqual(actual, trucks, 'sets state with the new provided list of trucks');
        });

        it('returns state when the action is unknown', () => {
            let truck = {
                id: 1,
                truckName: '2400'
            };

            let intialStateTruck = {
                id: 2,
                truckName: '2495'
            };

            let trucks = [truck];
            let initialState = [intialStateTruck];
            let action = {
                type: 'UNKNOWN_TYPE',
                trucks
            };

            let actual = TruckCareReducer(initialState, action);

            assert.deepEqual(actual, initialState, 'state remains unchanged when unknown action is received');
        });

    });
});
