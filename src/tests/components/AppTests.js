import sinon from 'sinon';
import assert from 'assert';
import React from 'react';
import { browserHistory } from 'react-router';
import Sidebar from '../../components/common/Header';
import GlobalNotification from '../../components/common/GlobalNotification';
import * as ShallowTestUtils from 'react-shallow-testutils';
import { App } from '../../components/App';

describe('App', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('_handleCloseGlobalNotification', () => {
    it('calls dispatcher method to disable notification', () => {
      let setGlobalError = sandbox.spy();
      let actions = {
        setGlobalError
      };
      let testObject = new App({ actions });

      testObject._handleCloseGlobalNotification();

      assert(setGlobalError.withArgs({}).calledOnce, 'called props setGlobalError');
    });
  });

  describe('_isGlobalErrorPresent', () => {
    it('returns true when an error is present', () => {
      let globalMessage = {
        type: 'danger',
        message: 'Foo'
      };

      let props = {
        globalMessage
      };

      let testObject = new App(props);

      let actual = testObject._isGlobalErrorPresent();

      assert.strictEqual(actual, true, 'returned true for error being present');
    });

    it('returns false when an error is not present', () => {
      let globalMessage = {};

      let props = {
        globalMessage
      };

      let testObject = new App(props);

      let actual = testObject._isGlobalErrorPresent();

      assert.strictEqual(actual, false, 'returned false for error not being present');
    });
  });

  describe('_handleMenuItemClick', () => {
    it('calls browserHistory to change the url on click', () => {
      let eventKey = { truckNumber: '2400' };
      let expected = '/TruckDetail/2400';

      let testObject = new App({ truckIdActions: {setTruckId: () => {}} });
      let push = sandbox.stub(browserHistory, 'push');
      testObject._handleMenuItemClick(eventKey);

      assert(push.withArgs(expected).calledOnce, 'called browserHistory with eventKey in the url');
    });

    it('dispatches action to set truckId on the store', () => {
      const truckId = 2;
      const eventKey = { id: truckId, truckNumber: '2400' };
      let setTruckId = sandbox.spy();

      sandbox.stub(browserHistory, 'push');
      let testObject = new App({ truckIdActions: { setTruckId } });
      
      testObject._handleMenuItemClick(eventKey);

      assert(setTruckId.withArgs(truckId).calledOnce, 'called truckId actions to set truckId');
    });
  });

  describe('render', () => {
    it('renders a sidebar and children', () => {
      let children = <ul></ul>;
      let trucks = [];
      let props = {
        children,
        trucks
      };
      let bound_handle = () => { };
      let testObject = new App(props);
      let isGlobalErrorPresent = sandbox.stub(testObject, '_isGlobalErrorPresent');
      let boundHandleMenuItem = sandbox.stub(testObject._handleMenuItemClick, 'bind').returns(bound_handle);
      let result = testObject.render();
      let components = ShallowTestUtils.findAllWithType(result, Sidebar);
      assert.strictEqual(components.length, 1, 'one sidebar element was rendered');
      assert.strictEqual(components[0].props.trucks, trucks, 'trucks prop was passed to sidebar');
      assert.strictEqual(components[0].props.dropDownClick, bound_handle, 'bound function was set to dropDownClick prop');
    });

    it('renders a GlobalNotification when an error is present', () => {
      let children = <ul></ul>;
      let trucks = [];
      let globalMessage = {
        type: 'danger',
        message: 'Message'
      };
      let boundFunction = () => { };
      let props = {
        children,
        trucks,
        globalMessage
      };
      let testObject = new App(props);
      let boundHandleCloseGlobalNotification = sandbox.stub(testObject._handleCloseGlobalNotification, 'bind').returns(boundFunction);
      let isGlobalErrorPresent = sandbox.stub(testObject, '_isGlobalErrorPresent').returns(true);

      let result = testObject.render();

      let components = ShallowTestUtils.findAllWithType(result, GlobalNotification);
      assert.strictEqual(components.length, 1, 'one GlobalNotification element was rendered');
      assert.strictEqual(components[0].props.notification, globalMessage, 'globalMessage prop was passed to GlobalNotification');
      assert.strictEqual(components[0].props.onDismiss, boundFunction, 'bound handle close global notification passed to GlobalNotification');
      assert(boundHandleCloseGlobalNotification.calledOnce, 'called bound handleGetNotification method');
      assert(isGlobalErrorPresent.calledOnce, 'called isGlobalErrorPresent once');
    });

    it('does not render a GlobalNotification when an error is not present', () => {
      let children = <ul></ul>;
      let trucks = [];
      let globalNotification = {};
      let boundFunction = () => { };
      let props = {
        children,
        trucks,
        globalNotification
      };
      let testObject = new App(props);
      let boundHandleCloseGlobalNotification = sandbox.stub(testObject._handleCloseGlobalNotification, 'bind').returns(boundFunction);
      let isGlobalErrorPresent = sandbox.stub(testObject, '_isGlobalErrorPresent').returns(false);

      let result = testObject.render();

      let components = ShallowTestUtils.findAllWithType(result, GlobalNotification);
      assert.strictEqual(components.length, 0, 'no GlobalNotification element was rendered');
      assert(boundHandleCloseGlobalNotification.notCalled, 'bound handleGetNotification method not called');
      assert(isGlobalErrorPresent.calledOnce, 'called isGlobalErrorPresent once');
    });
  });
});
