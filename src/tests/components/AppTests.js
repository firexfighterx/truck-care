import sinon from 'sinon';
import assert from 'assert';
import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {
    App
} from '../../components/App';

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
            let children = < ul > < /ul>;
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
    });
});
