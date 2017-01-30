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

    describe('createFailedToUpdateMemberStatus', () => {
        it('returns a message to show when fails to update truck care group member', () => {
            let expected = {
                type: 'danger',
                message: 'Failed to update Truck-Care Group member\'s status'
            };

            let actual = MessageFactory.createFailedToUpdateMemberStatus();

            assert.deepEqual(actual, expected, 'returned expected message to display');
        });
    });

    describe('createGetCategoryDetailsFailure', () => {
        it('returns a message to show when fails to get category details for a truckNumber', () => {
            let truckNumber = 2413;
            let expected = {
                type: 'danger',
                message: `Failed to get category details for ${truckNumber}`
            };

            let actual = MessageFactory.createGetCategoryDetailsFailure(truckNumber);

            assert.deepEqual(actual, expected, 'returned expected message to display');
        });
    });

    describe('createPerformTruckCareSuccess', () => {
        it('returns a message to show when successfully performs a truck care', () => {
            let expected = {
                type: 'success',
                message: 'Successfully performed Truck Care'
            };

            let actual = MessageFactory.createPerformTruckCareSuccess();

            assert.deepEqual(actual, expected, 'returned expected message to display');
        });
    });

    describe('createPerformTruckCareFailure', () => {
        it('returns a message to show when fails to perform a truck care', () => {
            let expected = {
                type: 'danger',
                message: `Failed to perform Truck Care`
            };

            let actual = MessageFactory.createPerformTruckCareFailure();

            assert.deepEqual(actual, expected, 'returned expected message to display');
        });
    });
});
