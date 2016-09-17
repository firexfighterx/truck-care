import assert from 'assert';
import * as GlobalErrorActions from '../../actions/GlobalErrorActions';

describe('GlobalErrorActions', () => {
    describe('setGlobalError', () => {
        it('returns SET_GLOBAL_ERROR action to dispatch', () => {
            let notification = {
                type: 'danger',
                message: 'There is a snake in my boot'
            };
            let expected = {
                type: 'SET_GLOBAL_ERROR',
                notification
            };

            let actual = GlobalErrorActions.setGlobalError(notification);

            assert.deepEqual(actual, expected, 'SET_GLOBAL_ERROR was dispatched with the notification');
        });
    });
});
