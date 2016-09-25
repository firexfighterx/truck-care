import sinon from 'sinon';
import assert from 'assert';
import TruckCareApi from '../../api/TruckCareApi';
import ApiHelper from '../../api/ApiHelper';

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
            let url = 'http://localhost:3000/api/trucks/all';
            let formData = {};

            let apiHelperGet = sandbox.stub(TruckCareApi, 'get').returns(API_GET_OBJECT);

            let result = TruckCareApi.getAllTrucks();
            assert(apiHelperGet.withArgs(url, formData).calledOnce, 'called api helper\'s get method');
        });
    });

    describe('getTruckCareGroup', () => {
        it('gets active Truck Care Group', () => {
            let API_GET_OBJECT = {};
            let url = 'http://localhost:3000/api/group/active';
            let formData = {};

            let apiHelperGet = sandbox.stub(TruckCareApi, 'get').returns(API_GET_OBJECT);

            let result = TruckCareApi.getTruckCareGroup();
            assert(apiHelperGet.withArgs(url, formData).calledOnce, 'called api helper\'s get method');
        });
    });
});
