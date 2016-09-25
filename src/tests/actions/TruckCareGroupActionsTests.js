import assert from 'assert';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as TruckCareGroupActions from '../../actions/TruckCareGroupActions';
import TruckCareApi from '../../api/TruckCareApi';
import * as types from '../../actions/actionTypes';

describe('TruckCareGroupActions', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('groupListSuccess', () => {
        it('returns GET_TRUCK_CARE_GROUP_SUCCESS item to be dispatched', () => {
            let truckCareGroup = {
                groupName: 'Foo',
                members: []
            };
            let expected = {
                type: 'GET_TRUCK_CARE_GROUP_SUCCESS',
                truckCareGroup
            };
            let actual = TruckCareGroupActions.loadGroupSuccess(truckCareGroup);

            assert.deepEqual(actual, expected, 'returned GET_TRUCK_CARE_GROUP_SUCCESS action to be dispatched');
        });
    });

    describe('loadTruckCareGroup', () => {
        const mockStore = configureMockStore([thunk]);

        it('dispatches GET_TRUCK_CARE_GROUP_SUCCESS when loading active truck care group succeeds', (done) => {
            const expectedActions = [
                {
                    type: types.GET_TRUCK_CARE_GROUP_SUCCESS,
                    truckCareGroup: {}
                }
            ];
            const store = mockStore({
                truckCareGroup: {}
            }, expectedActions, done);

            let getTruckCareGroup = sandbox.stub(TruckCareApi, 'getTruckCareGroup').returns(Promise.resolve());
            store.dispatch(TruckCareGroupActions.loadTruckCareGroup()).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.GET_TRUCK_CARE_GROUP_SUCCESS);
                assert(getTruckCareGroup.calledOnce, 'called getTruckCareGroup to get active group');
                done();
            });
        });
    });
});
