import sinon from 'sinon';
import assert from 'assert';
import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import GlobalNotification from '../../components/common/GlobalNotification';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {App} from '../../components/App';

describe('App', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('render', () => {
        it('renders a sidebar and children', () => {
            let children = <ul></ul>;
            let trucks = [];
            let props = {
                children,
                trucks
            };
            let testObject = new App(props);
            let result = testObject.render();
            let components = ShallowTestUtils.findAllWithType(result, Sidebar);
            assert.strictEqual(components.length, 1, 'one sidebar element was rendered');
            assert.strictEqual(components[0].props.trucks, trucks, 'trucks prop was passed to sidebar');
        });

        it('renders a GlobalNotification when an error is present', () => {
          let children = <ul></ul>;
          let trucks = [];
          let globalNotification = {
            type: 'danger',
            message: 'Message'
          };
          let boundFunction = () => {};
          let props = {
              children,
              trucks,
              globalNotification
          };
          let testObject = new App(props);
          let boundHandleCloseGlobalNotification = sandbox.stub(testObject._handleCloseGlobalNotification, 'bind').returns(boundFunction);
          let result = testObject.render();
          let components = ShallowTestUtils.findAllWithType(result, GlobalNotification);
          assert.strictEqual(components.length, 1, 'one GlobalNotification element was rendered');
          assert.strictEqual(components[0].props.notification, globalNotification, 'globalNotification prop was passed to GlobalNotification');
          assert.strictEqual(components[0].props.onDismiss, boundFunction, 'bound handle close global notification passed to GlobalNotification');
          assert(boundHandleCloseGlobalNotification.calledOnce, 'called bound handleGetNotification method');
        });
    });
});
