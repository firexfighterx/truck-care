import sinon from 'sinon';
import assert from 'assert';
import * as actions from '../../actions/GlobalMessageActions';
import GlobalMessageReducer from '../../reducers/GlobalMessageReducer';

describe('GlobalMessageReducer', () => {
    describe('Default GlobalMessageReducer', () => {
        it('returns new state when action type is SET_GLOBAL_ERROR', () => {
            let intialState = {};
            let newState = {
                type: 'danger',
                message: 'There is a snake in my boot'
            };
            let action = actions.setGlobalError(newState);

            let result = GlobalMessageReducer(intialState, action);

            assert.deepEqual(result, newState, 'new state was updated');
        });

        it('returns new state when state is pre-existing', () => {
            let intialState = {
                type: 'success',
                message: 'Yay new state'
            };
            let newState = {
                type: 'danger',
                message: 'There is a snake in my boot'
            };
            let action = actions.setGlobalError(newState);

            let result = GlobalMessageReducer(intialState, action);

            assert.deepEqual(result, newState, 'new state was updated');
        });

        it('returns unchanged state when action type is uknown', () => {
            let initialState = {};

            let newState = {
                type: 'danger',
                message: 'There is a snake in my boot'
            };

            let action = {
                type: 'UKNOWN_TYPE',
                notification: newState
            };

            let actual = GlobalMessageReducer(initialState, action);

            assert.deepEqual(actual, initialState, 'state remained unchanged for unknown type');
        });
    });
});
