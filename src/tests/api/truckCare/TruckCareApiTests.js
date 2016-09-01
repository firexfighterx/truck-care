import sinon from 'sinon';
import assert from 'assert';
import TruckCareApi from '../../../api/truckCare/TruckCareApi';
import ApiHelper from '../../../api/ApiHelper';
import TruckCareApiHandlers from '../../../api/truckCare/TruckCareApiHandlers';

describe('TruckCareApi', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('getAllTrucks', () => {
        it('gets all available trucks', () => {

            let API_GET_OBJECT = {};
            let BOUND_SUCCESS = {};
            let BOUND_FAILURE = {};
            let url = 'http://localhost:3000/api/trucks/all';
            let formData = {};

            let bindHandleGetTrucksSuccess = sandbox.stub(TruckCareApiHandlers.handleGetTrucksSuccess, 'bind').returns(BOUND_SUCCESS);
            let bindHandleGetTrucksFailure = sandbox.stub(TruckCareApiHandlers.handleGetTrucksFailure, 'bind').returns(BOUND_FAILURE);
            let apiHelperGet = sandbox.stub(TruckCareApi, 'get').returns(API_GET_OBJECT);

            let result = TruckCareApi.getAllTrucks();
            assert(apiHelperGet.withArgs(url, formData, BOUND_SUCCESS, BOUND_FAILURE).calledOnce, 'called api helper\'s get method');
        });
    });


});
