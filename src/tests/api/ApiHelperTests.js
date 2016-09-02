import sinon from 'sinon';
import assert from 'assert';
import $ from 'jquery';
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
            const AJAX_REQUEST = {};
            let testObject = new ApiHelper();
            let ajax = sandbox.stub($, 'ajax');

            ApiHelper.performAjax(AJAX_REQUEST);

            assert(ajax.withArgs(AJAX_REQUEST).calledOnce, 'called ajax with provided request');
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

            let performAjax = sandbox.stub(ApiHelper, 'performAjax');

            ApiHelper.get(url, data);

            assert(performAjax.withArgs(expectedRequest).calledOnce, 'called perform AJAX with request object');
        });
    });

});
