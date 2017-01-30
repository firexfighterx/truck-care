import sinon from 'sinon';
import assert from 'assert';
import $ from 'jquery';
import q from 'q';
import ApiHelper from '../../api/ApiHelper';

describe('ApiHelper', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('performAjax', () => {
        it('calls jQuery\'s ajax function with provided object', () => {
            let ajaxRequest = {};
            let ajaxResponse = {};
            let whenResult = { foo: 'bar' };
            let ajax = sandbox.stub($, 'ajax').returns(ajaxResponse);
            let when = sandbox.stub(q, 'when').returns(whenResult);

            let result = ApiHelper.performAjax(ajaxRequest);

            assert(ajax.withArgs(ajaxRequest).calledOnce, 'called ajax with provided request');
            assert(when.withArgs(ajaxResponse).calledOnce, 'called q\'s when function to turn ajax into a promise');
            assert.deepEqual(result, whenResult);
        });
    });

    describe('get', () => {
        it('sends a get call with the provided request object', () => {
            let url = 'the url';
            let data = {};
            let expectedRequest = {
                url: url,
                type: 'GET',
                data: data
            };
            let performAjaxReturnValue = {};
            let performAjax = sandbox.stub(ApiHelper, 'performAjax').returns(performAjaxReturnValue);

            let result = ApiHelper.get(url, data);

            assert(performAjax.withArgs(expectedRequest).calledOnce, 'called perform AJAX with request object');
            assert.deepEqual(result, performAjaxReturnValue);
        });
    });

    describe('put', () => {
        it('sends a put call with the provided request object', () => {
            let url = 'the url';
            let data = {};
            let expectedRequest = {
                url: url,
                type: 'PUT',
                data: data
            };
            let performAjaxReturnValue = {};
            let performAjax = sandbox.stub(ApiHelper, 'performAjax').returns(performAjaxReturnValue);

            let result = ApiHelper.put(url, data);

            assert(performAjax.withArgs(expectedRequest).calledOnce, 'called perform AJAX with request object');
            assert.deepEqual(result, performAjaxReturnValue);
        });
    });

    describe('post', () => {
        it('sends a post call with the provided request object', () => {
            let url = 'the url';
            let data = {};
            let expectedRequest = {
                url: url,
                type: 'POST',
                data: data
            };
            let performAjaxReturnValue = {};
            let performAjax = sandbox.stub(ApiHelper, 'performAjax').returns(performAjaxReturnValue);

            let result = ApiHelper.post(url, data);

            assert(performAjax.withArgs(expectedRequest).calledOnce, 'called perform AJAX with request object');
            assert.deepEqual(result, performAjaxReturnValue);
        });
    });

});
