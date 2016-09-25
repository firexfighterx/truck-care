import assert from 'assert';
import * as actions from '../../actions/TruckCareGroupActions';
import TruckCareGroupReducer from '../../reducers/TruckCareGroupReducer';

describe('TruckListReducer', () => {
    describe('Default TruckListReducer', () => {
        it('returns a new state with trucks when intial state is empty', () => {
            let group = {
                groupName: 'Foo',
                members: []
            };
            let action = actions.loadTruckCareGroupSuccess(group);

            let actual = TruckCareGroupReducer({}, action);

            assert.deepEqual(actual, group, 'sets state with the provided list of trucks');
        });

        it('returns a new state with a new active group when initial state has values', () => {
            let truckCareGroup = {
                groupName: 'Foo',
                members: []
            };

            let intialState = {
                groupName: 'Bar',
                members: []
            };

            let action = actions.loadTruckCareGroupSuccess(truckCareGroup);

            let actual = TruckCareGroupReducer(intialState, action);

            assert.deepEqual(actual, truckCareGroup, 'sets state with the new provided active group');
        });

        it('returns state when the action is unknown', () => {
            let truckCareGroup = {
                groupName: 'Foo',
                members: []
            };

            let intialState = {
                groupName: 'Bar',
                members: []
            };

            let action = {
                type: 'UNKNOWN_TYPE',
                truckCareGroup
            };

            let actual = TruckCareGroupReducer(intialState, action);

            assert.deepEqual(actual, intialState, 'state remains unchanged when unknown action is received');
        });

    });
});
