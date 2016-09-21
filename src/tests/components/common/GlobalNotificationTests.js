import sinon from 'sinon';
import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {Alert} from 'react-bootstrap';
import GlobalNotification from '../../../components/common/GlobalNotification';

describe('GlobalNotification', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('render', () => {
        it('renders an Alert with the notification', () => {
            let notification = {
                message: 'There is a snake in my boot',
                type: 'danger'
            };
            let onDismiss = () => {};
            let actual = new GlobalNotification({notification, onDismiss});
            let results = ShallowTestUtils.findAllWithType(actual, Alert);

            assert.strictEqual(results.length, 1, 'one Alert item was rendered');
            assert.strictEqual(results[0].props.bsStyle, notification.type, 'Alert Style is danger');
            assert.strictEqual(results[0].props.onDismiss, onDismiss);
            let alertChildren = ShallowTestUtils.findAllWithType(results[0], 'span');
            assert.strictEqual(alertChildren[1].props.children, notification.message, 'message was set inside of alert');

        });
    });
});
