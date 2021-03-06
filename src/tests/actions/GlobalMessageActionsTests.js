import assert from 'assert';
import * as GlobalErrorActions from '../../actions/GlobalMessageActions';

describe('GlobalErrorActions', () => {
    describe('setGlobalError', () => {
        it('returns SET_GLOBAL_ERROR action to dispatch', () => {
            let globalMessage = {
                type: 'danger',
                message: 'There is a snake in my boot'
            };
            let expected = {
                type: 'SET_GLOBAL_ERROR',
                globalMessage
            };

            let actual = GlobalErrorActions.setGlobalError(globalMessage);

            assert.deepEqual(actual, expected, 'SET_GLOBAL_ERROR was dispatched with the globalMessage');
        });
    });

    describe('setGlobalSuccess', () => {
        it('returns SET_GLOBAL_SUCCESS action to dispatch', () => {
            let globalMessage = {
                type: 'success',
                message: 'There is a snake in my boot'
            };
            let expected = {
                type: 'SET_GLOBAL_SUCCESS',
                globalMessage
            };

            let actual = GlobalErrorActions.setGlobalSuccess(globalMessage);

            assert.deepEqual(actual, expected, 'SET_SUCCESS_ERROR was dispatched with the globalMessage');
        });
    });
});
