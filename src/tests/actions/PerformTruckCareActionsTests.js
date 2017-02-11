import sinon from 'sinon';
import assert from 'assert';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as types from '../../actions/Actions';
import MessageFactory from '../../factories/MessageFactory';
import TruckCareApi from '../../api/TruckCareApi';
import * as Actions from '../../actions/PerformTruckCareActions';

describe('PerformTruckCareActions', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('performGoodTruckCare', () => {
        const mockStore = configureMockStore([thunk]);
        it('dispatches SET_GLOBAL_SUCCESS after performing a truck care', (done) => {
            const store = mockStore({}, done);
            let message = {};
            const args = {};
            let createPerformTruckCareSuccess = sandbox.stub(MessageFactory, 'createPerformTruckCareSuccess').returns(message);
            let performTruckCare = sandbox.stub(TruckCareApi, 'performTruckCare').returns(Promise.resolve());
            store.dispatch(Actions.performTruckCare(args)).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.SET_GLOBAL_SUCCESS);
                assert.deepEqual(actions[0].globalMessage, message);
                assert(performTruckCare.withArgs(args).calledOnce, 'called api with passed in args');
                assert(createPerformTruckCareSuccess.calledOnce, 'called createPerformTruckCareSuccess to get message to display');
                done();
            });
        });

        it('dispatches SET_GLOBAL_ERROR when fails to perform truck care', (done) => {
            const store = mockStore({}, done);
            let message = {};
            const args = {};
            let createPerformTruckCareFailure = sandbox.stub(MessageFactory, 'createPerformTruckCareFailure').returns(message);
            let performTruckCare = sandbox.stub(TruckCareApi, 'performTruckCare').returns(Promise.reject());
            store.dispatch(Actions.performTruckCare(args)).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.SET_GLOBAL_ERROR);
                assert.deepEqual(actions[0].globalMessage, message);
                assert(createPerformTruckCareFailure.calledOnce, 'called createPerformTruckCareFailure to get message to display');
                done();
            });
        });
    });
});