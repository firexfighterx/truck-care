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
        });
    });
});
