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
            let ajax = sandbox.stub($, 'ajax').returns(ajaxResponse);
            let when = sandbox.stub(q, 'when');

            ApiHelper.performAjax(ajaxRequest);
            assert(ajax.withArgs(ajaxRequest).calledOnce, 'called ajax with provided request');
            assert(when.withArgs(ajaxResponse).calledOnce, 'called q\'s when function to turn ajax into a promise');
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

            ApiHelper.get(url, data);

            assert(performAjax.withArgs(expectedRequest).calledOnce, 'called perform AJAX with request object');
        });
    });

});
