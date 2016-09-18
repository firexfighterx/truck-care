import assert from 'assert';
import MessageFactory from '../../factories/MessageFactory';

describe('MessageFactory', () => {
    describe('createGetTrucksFailure', () => {
        it('returns a message to show when fails to get truck list', () => {
            let expected = {
                type: 'danger',
                message: 'Error: Failed to retreive Truck List Items'
            };

            let actual = MessageFactory.createGetTrucksFailure();

            assert.deepEqual(actual, expected, 'returned expected message to display');
        });
    });
});
