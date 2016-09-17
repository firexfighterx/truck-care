import assert from 'assert';
import * as GlobalErrorActions from '../../actions/GlobalErrorActions';

describe('GlobalErrorActions', () => {
    describe('setGlobalError', () => {
        it('returns SET_GLOBAL_ERROR action to dispatch', () => {
            let globalErrorNotification = {
                type: 'danger',
                message: 'There is a snake in my boot'
            };
            let expected = {
                type: 'SET_GLOBAL_ERROR',
                globalErrorNotification
            };

            let actual = GlobalErrorActions.setGlobalError(globalErrorNotification);

            assert.deepEqual(actual, expected, 'SET_GLOBAL_ERROR was dispatched with the globalErrorNotification');
        });
    });
});
