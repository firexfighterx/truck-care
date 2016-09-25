import assert from 'assert';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as TruckCareGroupActions from '../../actions/TruckCareGroupActions';
import MessageFactory from '../../factories/MessageFactory';
import TruckCareApi from '../../api/TruckCareApi';
import * as types from '../../actions/ActionTypes';

describe('TruckCareGroupActions', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('groupListSuccess', () => {
        it('returns LOAD_TRUCK_CARE_GROUP_SUCCESS item to be dispatched', () => {
            let truckCareGroup = {
                groupName: 'Foo',
                members: []
            };
            let expected = {
                type: 'LOAD_TRUCK_CARE_GROUP_SUCCESS',
                truckCareGroup
            };
            let actual = TruckCareGroupActions.loadTruckCareGroupSuccess(truckCareGroup);

            assert.deepEqual(actual, expected, 'returned LOAD_TRUCK_CARE_GROUP_SUCCESS action to be dispatched');
        });
    });

    describe('loadTruckCareGroup', () => {
        const mockStore = configureMockStore([thunk]);
        it('dispatches LOAD_TRUCK_CARE_GROUP_SUCCESS when loading truck care group succeeds', (done) => {
            const expectedActions = [
                {
                    type: types.LOAD_TRUCK_CARE_GROUP_SUCCESS,
                    truckCareGroup: {}
                }
            ];
            const store = mockStore({
                truckCareGroup: {}
            }, expectedActions, done);

            let getTruckCareGroup = sandbox.stub(TruckCareApi, 'getTruckCareGroup').returns(Promise.resolve());
            store.dispatch(TruckCareGroupActions.loadTruckCareGroup()).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.LOAD_TRUCK_CARE_GROUP_SUCCESS);
                assert(getTruckCareGroup.calledOnce, 'called getTruckCareGroup to get active group');
                done();
            });
        });

        it('dispatches SET_GLOBAL_ERROR when loading truck care group', (done) => {
            const expectedActions = [
                {
                    type: types.SET_GLOBAL_ERROR,
                    globalErrorNotification: {}
                }
            ];

            const store = mockStore({
                trucks: []
            }, expectedActions, done);
            let failureMessage = {};
            let createGetActiveGroupFailure = sandbox.stub(MessageFactory, 'createGetActiveGroupFailure').returns(failureMessage);
            let getTruckCareGroup = sandbox.stub(TruckCareApi, 'getTruckCareGroup').returns(Promise.reject());
            store.dispatch(TruckCareGroupActions.loadTruckCareGroup()).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.SET_GLOBAL_ERROR);
                assert(createGetActiveGroupFailure.calledOnce, 'called createGetActiveGroupFailure to get message to display');
                done();
            });
        });
    });
});
