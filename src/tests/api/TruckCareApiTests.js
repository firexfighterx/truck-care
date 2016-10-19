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

    describe('updateTruckCareGroupMemberToActive', () => {
        it('updates the truck group member to active', () => {
            let API_GET_OBJECT = {};
            let url = 'http://localhost:3000/api/group/member/1/activate';
            let formData = {};
            let id = 1;

            let apiHelperGet = sandbox.stub(TruckCareApi, 'put').returns(API_GET_OBJECT);

            let result = TruckCareApi.updateTruckCareGroupMemberToActive(id);
            assert(apiHelperGet.withArgs(url, formData).calledOnce, 'called api helper\'s get method');
        });
    });

    describe('updateTruckCareGroupMemberToInctive', () => {
        it('updates the truck group member to active', () => {
            let API_GET_OBJECT = {};
            let url = 'http://localhost:3000/api/group/member/1/deactivate';
            let formData = {};
            let id = 1;

            let apiHelperGet = sandbox.stub(TruckCareApi, 'put').returns(API_GET_OBJECT);

            let result = TruckCareApi.updateTruckCareGroupMemberToInactive(id);
            assert(apiHelperGet.withArgs(url, formData).calledOnce, 'called api helper\'s get method');
        });
    });

    describe('getCategoryDetails', () => {
        it('gets the category and category details', () => {
            let API_GET_OBJECT = {};
            let truckNumber = 2412;
            let url = `http://localhost:3000/api/truck/${truckNumber}/category/details`;
            let formData = {};

            let apiHelperGet = sandbox.stub(TruckCareApi, 'get').returns(API_GET_OBJECT);

            let result = TruckCareApi.getCategoryDetails(truckNumber);
            assert(apiHelperGet.withArgs(url, formData).calledOnce, 'called api helper\'s get method');
        });
    });
});
