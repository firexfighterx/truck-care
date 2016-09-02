import sinon from 'sinon';
import assert from 'assert';
import TruckCareApiHandlers from '../../../api/truckCare/TruckCareHandlers';

describe('TruckCareApiHandlers', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('handleGetTrucksSuccess', () => {
        it('calls resolve with the passed in data object', () => {
            let trucks = [];
            let resolve = sandbox.spy();

            TruckCareApiHandlers.handleGetTrucksSuccess(resolve, trucks);

            assert(resolve.withArgs([]).calledOnce, 'called resolve callback with data passed in');
        });
    });


    describe('handleGetTrucksFailure', () => {
        it('calls reject with the passed in data object', () => {
            let reject = sandbox.spy();
            let ajaxResponse = {};

            TruckCareApiHandlers.handleGetTrucksFailure(reject, ajaxResponse);

            assert(reject.withArgs(ajaxResponse).calledOnce, 'called reject callback with data passed in');
        });
    });
});
