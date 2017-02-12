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
            assert.deepEqual(result, API_GET_OBJECT);
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
            assert.deepEqual(result, API_GET_OBJECT);
        });
    });

    describe('updateTruckCareGroupMemberToActive', () => {
        it('updates the truck group member to active', () => {
            let API_PUT_OBJECT = {};
            let url = 'http://localhost:3000/api/group/member/1/activate';
            let formData = {};
            let id = 1;

            let apiHelperGet = sandbox.stub(TruckCareApi, 'put').returns(API_PUT_OBJECT);

            let result = TruckCareApi.updateTruckCareGroupMemberToActive(id);
            assert(apiHelperGet.withArgs(url, formData).calledOnce, 'called api helper\'s put method');
            assert.deepEqual(result, API_PUT_OBJECT);
        });
    });

    describe('updateTruckCareGroupMemberToInctive', () => {
        it('updates the truck group member to active', () => {
            let API_PUT_OBJECT = {};
            let url = 'http://localhost:3000/api/group/member/1/deactivate';
            let formData = {};
            let id = 1;

            let apiHelperGet = sandbox.stub(TruckCareApi, 'put').returns(API_PUT_OBJECT);

            let result = TruckCareApi.updateTruckCareGroupMemberToInactive(id);
            assert(apiHelperGet.withArgs(url, formData).calledOnce, 'called api helper\'s put method');
            assert.deepEqual(result, API_PUT_OBJECT);
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
            assert.deepEqual(result, API_GET_OBJECT);
        });
    });

    describe('performTruckCare', () => {
        it('posts args to perform a truck care', () => {
            const postResponse = {};
            const url = 'http://localhost:3000/api/perform/truckcare';
            const args = { foo: "bar" };

            let apiHelperPost = sandbox.stub(TruckCareApi, 'post').returns(postResponse);

            let result = TruckCareApi.performTruckCare(args);
            assert(apiHelperPost.withArgs(url, JSON.stringify(args)).calledOnce, 'called api helper\'s post method');
            assert.deepEqual(result, postResponse);
        });
    });
});
