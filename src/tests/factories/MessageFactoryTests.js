import assert from 'assert';
import MessageFactory from '../../factories/MessageFactory';

describe('MessageFactory', () => {
    describe('createGetTrucksFailure', () => {
        it('returns a message to show when fails to get truck list', () => {
            let expected = {
                type: 'danger',
                message: 'Failed to retreive Truck List'
            };

            let actual = MessageFactory.createGetTrucksFailure();

            assert.deepEqual(actual, expected, 'returned expected message to display');
        });
    });

    describe('createGetActiveGroupFailure', () => {
        it('returns a message to show when fails to get truck care group', () => {
            let expected = {
                type: 'danger',
                message: 'Failed to get Truck-Care Group'
            };

            let actual = MessageFactory.createGetActiveGroupFailure();

            assert.deepEqual(actual, expected, 'returned expected message to display');
        });
    });
});
