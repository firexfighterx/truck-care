import sinon from 'sinon';
import assert from 'assert';
import ApiHelper from '../../api/ApiHelper';

describe('ApiHelper', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    // describe('performAjax', () => {
    //     it('calls jQuery\'s ajax function with provided object', () => {
    //         const AJAX_REQUEST = {};
    //         let testObject = new ApiHelper();
    //         let ajax = sandbox.stub('jQuery', ajax);
    //
    //         testObject.performAjax(AJAX_REQUEST);
    //
    //         assert(ajax.withArgs(AJAX_REQUEST).calledOnce, 'called ajax with provided request');
    //     });
    // });

    describe('get', () => {
        it('sends a get call with the provided request object', () => {
            let url = 'the url';
            let data = {};
            let successCallback = () => {};
            let failureCallback = () => {};
            let expectedRequest = {
                url: url,
                type: 'GET',
                data: data,
                success: successCallback,
                failure: failureCallback
            };

            let performAjax = sandbox.stub(ApiHelper, 'performAjax');

            ApiHelper.get(url, data, successCallback, failureCallback);

            assert(performAjax.withArgs(expectedRequest).calledOnce, 'called perform AJAX with request object');
        });
    });

});
