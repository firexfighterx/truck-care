import sinon from 'sinon';
import assert from 'assert';
import * as TruckCareActions from '../../actions/TruckListActions';
import * as GlobalMessageActions from '../../actions/GlobalMessageActions';
import MessageFactory from '../../factories/MessageFactory';
import TruckCareApi from '../../api/TruckCareApi';
import * as types from '../../actions/Actions';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import configureMockStore from 'redux-mock-store';

describe('TruckCareActions', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('loadTrucksSuccess', () => {
        it('returns GET_ALL_TRUCKS_SUCCESS action to dispatch', () => {
            let truck = {
                id: 1,
                truckName: '2400'
            };
            let expectedType = 'GET_ALL_TRUCKS_SUCCESS';
            let trucks = [truck];

            let actual = TruckCareActions.loadTrucksSuccess(trucks);

            assert.strictEqual(actual.type, expectedType, 'returned correct item to be dispatched');
            assert.strictEqual(actual.trucks, trucks);
        });
    });

    describe('loadTrucks', () => {
        const middleware = [thunk];
        const mockStore = configureMockStore(middleware);

        it('dispatches GET_ALL_TRUCKS_SUCCESS when loading trucks succeeds', (done) => {
            const expectedActions = [
                {
                    type: types.GET_ALL_TRUCKS_SUCCESS,
                    trucks: []
                }
            ];

            const store = mockStore({
                trucks: []
            }, expectedActions, done);
            let loadTrucks = sandbox.stub(TruckCareApi, 'getAllTrucks').returns(Promise.resolve([
                {
                    id: 3456,
                    truckNumber: '2400'
                }
            ]));
            let push = sandbox.stub(browserHistory, 'push');
            store.dispatch(TruckCareActions.loadTrucks()).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.GET_ALL_TRUCKS_SUCCESS);
                assert.strictEqual(actions[1].type, types.SET_TRUCK_ID);
                assert.strictEqual(actions[1].truckId, 3456);
                assert(push.withArgs('/TruckDetail/2400').calledOnce, 'called browserHistory with first truck returned');
                done();
            });
        });

        it('dispatches GET_ALL_TRUCKS_SUCCESS and does not redirect when empty list of trucks', (done) => {
            const expectedActions = [
                {
                    type: types.GET_ALL_TRUCKS_SUCCESS,
                    trucks: []
                }
            ];

            const store = mockStore({
                trucks: []
            }, expectedActions, done);
            let loadTrucks = sandbox.stub(TruckCareApi, 'getAllTrucks').returns(Promise.resolve([]));
            let push = sandbox.stub(browserHistory, 'push');
            store.dispatch(TruckCareActions.loadTrucks()).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.GET_ALL_TRUCKS_SUCCESS);
                assert(push.notCalled, 'browserHistory\'s push not called');
                done();
            });
        });

        it('dispatches GET_ALL_TRUCKS_FAILURE when loading trucks fails', (done) => {
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
            let createGetTrucksFailure = sandbox.stub(MessageFactory, 'createGetTrucksFailure').returns(failureMessage);
            let loadTrucks = sandbox.stub(TruckCareApi, 'getAllTrucks').returns(Promise.reject());
            store.dispatch(TruckCareActions.loadTrucks()).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.SET_GLOBAL_ERROR);
                assert(createGetTrucksFailure.calledOnce, 'called createGetTrucksFailure to get message to display');
                done();
            });
        });
    });
});
