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

});
