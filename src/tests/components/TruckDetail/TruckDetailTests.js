import sinon from 'sinon';
import assert from 'assert';
import {Panel} from 'react-bootstrap';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {TruckDetail} from '../../../components/TruckDetail/TruckDetail';
import TruckCareGroup from '../../../components/TruckDetail/TruckCareGroup';

describe('TruckDetail', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('_updateTruckCareGroupMemberToActive', () => {
        it('calls action creator to update isActive status', () => {
            let eventKey = 2;
            let isActive = true;
            let updateMemberIsActiveStatus = sandbox.spy();

            let props = {
                actions: {
                    updateMemberIsActiveStatus
                }
            };

            let testObject = new TruckDetail(props);

            testObject._updateTruckCareGroupMemberToActive(eventKey);

            assert(updateMemberIsActiveStatus.withArgs(eventKey, isActive).calledOnce, 'called props action method updateMemberIsActiveStatus');
        });
    });

    describe('_updateTruckCareGroupMemberToInactive', () => {
        it('calls action creator to update isActive status', () => {
            let eventKey = 2;
            let isActive = false;
            let updateMemberIsActiveStatus = sandbox.spy();

            let props = {
                actions: {
                    updateMemberIsActiveStatus
                }
            };

            let testObject = new TruckDetail(props);

            testObject._updateTruckCareGroupMemberToInactive(eventKey);

            assert(updateMemberIsActiveStatus.withArgs(eventKey, isActive).calledOnce, 'called props action method updateMemberIsActiveStatus');
        });
    });

    describe('render', () => {
        it('renders a the query string value tied to props', () => {
            let testObject = new TruckDetail({currentTruck: '2400'});

            let actual = testObject.render();

            let result = ShallowTestUtils.findAllWithType(actual, Panel);

            assert.strictEqual(result[0].props.children, '2400', 'currentTruck was rendered');
        });

        it('renders a Truck Care Group with props', () => {
            let truckCareGroup = {};
            let bound_active_function = () => {};
            let bound_inactive_function = () => {};

            let testObject = new TruckDetail({truckCareGroup});
            let boundUpdateTruckCareGroupMemberToActive = sandbox.stub(testObject._updateTruckCareGroupMemberToActive, 'bind').returns(bound_active_function);
            let boundUpdateTruckCareGroupMemberToInActive = sandbox.stub(testObject._updateTruckCareGroupMemberToInactive, 'bind').returns(bound_inactive_function);

            let result = testObject.render();
            let group = ShallowTestUtils.findAllWithType(result, TruckCareGroup);
            assert.strictEqual(group.length, 1, 'one TruckCareGroup rendered');
            assert.strictEqual(group[0].props.truckCareGroup, truckCareGroup, 'props truckCareGroup was passed to TruckCareGroup');
            assert.strictEqual(group[0].props.updateTruckCareGroupMemberToActive, bound_active_function, 'bound updateTruckCareGroupMemberToActive passed in as props to TruckCareGroup');
            assert.strictEqual(group[0].props.updateTruckCareGroupMemberToInActive, bound_inactive_function, 'bound updateTruckCareGroupMemberToInActive passed in as props to TruckCareGroup');
        });
    });
});
