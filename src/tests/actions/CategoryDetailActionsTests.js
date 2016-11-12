import sinon from 'sinon';
import assert from 'assert';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../actions/Actions';
import * as CategoryDetailActions from '../../actions/CategoryDetailActions';
import TruckCareApi from '../../api/TruckCareApi';
import MessageFactory from '../../factories/MessageFactory';

describe('CategoryDetailActions', () => {

    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('loadCategoryDetailsSuccess', () => {
        it('creates GET_CATEGORY_DETAILS_SUCCESS object to dispatch', () => {
            let categoryDetails = [{}];

            let expected = {
                type: 'GET_CATEGORY_DETAILS_SUCCESS',
                categoryDetails
            };

            let actual = CategoryDetailActions.loadCategoryDetailsSuccess(categoryDetails);
            assert.deepEqual(actual, expected, 'returns correct dispatch object');
        });
    });

    describe('loadCategoryDetail', () => {
        const mockStore = configureMockStore([thunk]);
        it('dispatches LOAD_TRUCK_CARE_GROUP_SUCCESS after update member to active', (done) => {
            const expectedActions = [
                {
                    type: types.GET_CATEGORY_DETAILS_SUCCESS,
                    categoryDetails: []
                }
            ];
            const store = mockStore({
                categoryDetails: []
            }, expectedActions, done);
            let truckNumber = 2412;

            let getCategoryDetails = sandbox.stub(TruckCareApi, 'getCategoryDetails').returns(Promise.resolve());
            store.dispatch(CategoryDetailActions.loadCategoryDetail(truckNumber)).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.GET_CATEGORY_DETAILS_SUCCESS);
                assert(getCategoryDetails.withArgs(truckNumber).calledOnce, 'called getCategoryDetails to get category details');
                done();
            });
        });

        it('dispatches SET_GLOBAL_ERROR when loadCategoryDetail fails', (done) => {
            const expectedActions = [
                {
                    type: types.SET_GLOBAL_ERROR,
                    globalErrorNotification: {}
                }
            ];

            const store = mockStore({
                categoryDetails: []
            }, expectedActions, done);
            let failureMessage = {};
            let truckNumber = 2412;
            let createGetCategoryDetailsFailure = sandbox.stub(MessageFactory, 'createGetCategoryDetailsFailure').returns(failureMessage);
            let getCategoryDetails = sandbox.stub(TruckCareApi, 'getCategoryDetails').returns(Promise.reject());
            store.dispatch(CategoryDetailActions.loadCategoryDetail(truckNumber)).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.SET_GLOBAL_ERROR);
                assert(createGetCategoryDetailsFailure.withArgs(truckNumber).calledOnce, 'called createGetCategoryDetailsFailure to get message to display');
                done();
            });
        });

    });
});
