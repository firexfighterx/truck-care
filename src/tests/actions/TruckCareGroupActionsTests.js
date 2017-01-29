import assert from 'assert';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as TruckCareGroupActions from '../../actions/TruckCareGroupActions';
import MessageFactory from '../../factories/MessageFactory';
import TruckCareApi from '../../api/TruckCareApi';
import * as types from '../../actions/Actions';

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

    describe('updateTruckCareGroupMemberToActive', (done) => {
        const mockStore = configureMockStore([thunk]);
        it('dispatches LOAD_TRUCK_CARE_GROUP_SUCCESS after update member to active', () => {
            const expectedActions = [
                {
                    type: types.LOAD_TRUCK_CARE_GROUP_SUCCESS,
                    truckCareGroup: {}
                }
            ];
            const store = mockStore({
                truckCareGroup: {}
            }, expectedActions, done);
            let id = 12;

            let updateTruckCareGroupMemberToActive = sandbox.stub(TruckCareApi, 'updateTruckCareGroupMemberToActive').returns(Promise.resolve());
            store.dispatch(TruckCareGroupActions.updateTruckCareGroupMemberToActive(id)).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.LOAD_TRUCK_CARE_GROUP_SUCCESS);
                assert(updateTruckCareGroupMemberToActive.withArgs(id).calledOnce, 'called updateTruckCareGroupMemberToActive to update active member');
                done();
            });
        });

        it('dispatches SET_GLOBAL_ERROR when updating updateTruckCareGroupMemberToActive fails', (done) => {
            const expectedActions = [
                {
                    type: types.SET_GLOBAL_ERROR,
                    globalMessage: {}
                }
            ];

            const store = mockStore({
                trucks: []
            }, expectedActions, done);
            let failureMessage = {};
            let id = 12;
            let createFailedToUpdateMemberStatus = sandbox.stub(MessageFactory, 'createFailedToUpdateMemberStatus').returns(failureMessage);
            let updateTruckCareGroupMemberToActive = sandbox.stub(TruckCareApi, 'updateTruckCareGroupMemberToActive').returns(Promise.reject());
            store.dispatch(TruckCareGroupActions.updateTruckCareGroupMemberToActive(id)).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.SET_GLOBAL_ERROR);
                assert(createFailedToUpdateMemberStatus.calledOnce, 'called createFailedToUpdateMemberStatus to get message to display');
                done();
            });
        });
    });

    describe('updateTruckCareGroupMemberToInactive', () => {
        const mockStore = configureMockStore([thunk]);
        it('dispatches LOAD_TRUCK_CARE_GROUP_SUCCESS after update member to inactive', (done) => {
            const expectedActions = [
                {
                    type: types.LOAD_TRUCK_CARE_GROUP_SUCCESS,
                    truckCareGroup: {}
                }
            ];
            const store = mockStore({
                truckCareGroup: {}
            }, expectedActions, done);
            let id = 12;

            let updateTruckCareGroupMemberToInactive = sandbox.stub(TruckCareApi, 'updateTruckCareGroupMemberToInactive').returns(Promise.resolve());
            store.dispatch(TruckCareGroupActions.updateTruckCareGroupMemberToInactive(id)).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.LOAD_TRUCK_CARE_GROUP_SUCCESS);
                assert(updateTruckCareGroupMemberToInactive.withArgs(id).calledOnce, 'called updateTruckCareGroupMemberToInactive to update active member');
                done();
            });
        });

        it('dispatches SET_GLOBAL_ERROR when updating updateTruckCareGroupMemberToInactive fails', (done) => {
            const expectedActions = [
                {
                    type: types.SET_GLOBAL_ERROR,
                    globalMessage: {}
                }
            ];

            const store = mockStore({
                trucks: []
            }, expectedActions, done);
            let failureMessage = {};
            let id = 12;
            let createFailedToUpdateMemberStatus = sandbox.stub(MessageFactory, 'createFailedToUpdateMemberStatus').returns(failureMessage);
            let updateTruckCareGroupMemberToActive = sandbox.stub(TruckCareApi, 'updateTruckCareGroupMemberToInactive').returns(Promise.reject());
            store.dispatch(TruckCareGroupActions.updateTruckCareGroupMemberToInactive(id)).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.SET_GLOBAL_ERROR);
                assert(createFailedToUpdateMemberStatus.calledOnce, 'called createFailedToUpdateMemberStatus to get message to display');
                done();
            });
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
                    globalMessage: {}
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
