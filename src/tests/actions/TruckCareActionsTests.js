import sinon from 'sinon';
import assert from 'assert';
import * as TruckCareActions from '../../actions/TruckCareActions';
import TruckCareApi from '../../api/truckCare/TruckCareApi';
import * as types from '../../actions/actionTypes';
import thunk from 'redux-thunk';
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

    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);

    describe('Async Actions', () => {

        it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {

            const expectedActions = [{
                type: types.BEGIN_AJAX_CALL
            }, {
                type: types.GET_ALL_TRUCKS_SUCCESS,
                trucks: [{
                    id: 3456,
                    title: '2400'
                }]
            }];

            const store = mockStore({
                trucks: []
            }, expectedActions, done);
            let loadTrucks = sandbox.stub(TruckCareApi, 'getAllTrucks').returns(Promise.resolve());
            store.dispatch(TruckCareActions.loadTrucks()).then(() => {
                const actions = store.getActions();
                assert.strictEqual(actions[0].type, types.BEGIN_AJAX_CALL);
                assert.strictEqual(actions[1].type, types.GET_ALL_TRUCKS_SUCCESS);
                done();
            });
        });
    });
});
