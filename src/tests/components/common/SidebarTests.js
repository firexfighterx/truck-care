import sinon from 'sinon';
import assert from 'assert';
import {
    browserHistory
} from 'react-router';
import * as ShallowTestUtils from 'react-shallow-testutils';
import NavLink from '../../../components/common/NavLink';
import Sidebar from '../../../components/common/Sidebar';

describe('SideBar', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('componentDidMount', () => {
        it('redirects to Truck Detail for first truck in the list', () => {
            let truck_one = {
                id: 1,
                truckNumber: '2400'
            };
            let truck_two = {
                id: 2,
                truckNumber: '2495'
            };
            let trucks = [truck_one, truck_two];
            let push = sandbox.stub(browserHistory, 'push');
            let testObject = new Sidebar({
                trucks
            });

            testObject.componentDidMount();

            assert(push.withArgs('/TruckDetail/2400').calledOnce, 'called browserHistory push one time');
        });

        it('does not redirect if the list is empty', () => {

            let trucks = [];
            let push = sandbox.stub(browserHistory, 'push');

            let testObject = new Sidebar({
                trucks
            });

            testObject.componentDidMount();

            assert(push.notCalled, 'did not call to browserHistory push');
        });
    });

    describe('render', () => {
        it('renders nav links when there are trucks', () => {
            let truck_one = {
                id: 1,
                truckNumber: '2400'
            };
            let truck_two = {
                id: 2,
                truckNumber: '2495'
            };
            let trucks = [truck_one, truck_two];
            let testObject = new Sidebar({
                trucks
            });

            let result = testObject.render();
            let navLinks = ShallowTestUtils.findAllWithType(result, NavLink);

            assert.strictEqual(navLinks.length, 2, 'two nav links were rendered');
            assert.strictEqual(navLinks[0].props.children, truck_one.truckNumber, 'text of the first nav link was set to truckNumber');
            assert.strictEqual(navLinks[0].key, `${truck_one.id}`, 'key of the first nav link was set to truckId');
            assert.strictEqual(navLinks[0].props.to, `/TruckDetail/${truck_one.truckNumber}`, 'to field was set with correct url');
            assert.strictEqual(navLinks[0].props.isIndex, false, 'isIndex set to false');
            assert.strictEqual(navLinks[1].props.children, truck_two.truckNumber, 'text of the second nav link was set to truck number');
            assert.strictEqual(navLinks[1].key, `${truck_two.id}`, 'key of the second nav link was set to truckId');
            assert.strictEqual(navLinks[1].props.to, `/TruckDetail/${truck_two.truckNumber}`, 'to field was set with correct url');
            assert.strictEqual(navLinks[1].props.isIndex, false, 'isIndex set to false');
        });

        it('does not render any links when no trucks available', () => {
            let trucks = [];
            let testObject = new Sidebar({
                trucks
            });

            let result = testObject.render();
            let navLinks = ShallowTestUtils.findAllWithType(result, NavLink);

            assert.strictEqual(navLinks.length, 0, 'no nav links were rendered');
        });
    });
});
