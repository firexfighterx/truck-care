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
            let promisify = sandbox.stub(ApiHelper, 'promisify');
            let API_GET_OBJECT = {};
            let SUCCESS_CALLBACK = {};
            let FAILURE_CALLBACK = {};
            let url = 'localhost:3000/api/trucks/all';
            let formData = {};

            let handleGetTrucksSuccess = sandbox.stub(TruckCareApiHandlers, 'handleGetTrucksSuccess').returns(SUCCESS_CALLBACK);
            let handleGetTrucksFailure = sandbox.stub(TruckCareApiHandlers, 'handleGetTrucksFailure').returns(FAILURE_CALLBACK);
            let apiHelperGet = sandbox.stub(ApiHelper, 'get').returns(API_GET_OBJECT);

            let result = TruckCareApi.getAllTrucks();
            assert(apiHelperGet.withArgs(url, formData, handleGetTrucksSuccess, handleGetTrucksFailure).calledOnce, 'called api helper\'s get method');
            assert(promisify.withArgs(API_GET_OBJECT).calledOnce, 'called promisify with api helper get');
        });
    });


});
