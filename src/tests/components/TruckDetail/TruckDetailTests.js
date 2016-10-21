import sinon from 'sinon';
import assert from 'assert';
import {Panel} from 'react-bootstrap';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {TruckDetail} from '../../../components/TruckDetail/TruckDetail';
import CategoryDetails from '../../../components/TruckDetail/CategoryDetails';
import TruckCareGroup from '../../../components/TruckCareGroup/TruckCareGroup';

describe('TruckDetail', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('componentWillReceiveProps', () => {
        it('calls categoryDetailActions with the selected truck', () => {
            let loadCategoryDetailSpy = sandbox.spy();
            let props = {
                categoryDetailActions: {
                    loadCategoryDetail: loadCategoryDetailSpy
                }
            };
            let currentTruck = 2412;
            let nextProps = {
                currentTruck
            };

            let testObject = new TruckDetail(props);

            testObject.componentWillReceiveProps(nextProps);

            assert(loadCategoryDetailSpy.withArgs(currentTruck).calledOnce, 'called category action with next props current truck');
        });

        it('does not call loadCategoryDetail when nextProps and current props match', () => {
            let loadCategoryDetailSpy = sandbox.spy();
            let currentTruck = 2412;
            let props = {
                currentTruck,
                categoryDetailActions: {
                    loadCategoryDetail: loadCategoryDetailSpy
                }
            };

            let nextProps = {
                currentTruck
            };

            let testObject = new TruckDetail(props);

            testObject.componentWillReceiveProps(nextProps);

            assert(loadCategoryDetailSpy.notCalled, 'does not call loadCategoryDetail');
        });
    });

    describe('_updateTruckCareGroupMemberToActive', () => {
        it('calls action creator to update isActive status', () => {
            let eventKey = 2;
            let isActive = true;
            let updateTruckCareGroupMemberToActive = sandbox.spy();

            let props = {
                actions: {
                    updateTruckCareGroupMemberToActive
                }
            };

            let testObject = new TruckDetail(props);

            testObject._updateTruckCareGroupMemberToActive(eventKey);

            assert(updateTruckCareGroupMemberToActive.withArgs(eventKey).calledOnce, 'called props action method updateTruckCareGroupMemberToActive');
        });
    });

    describe('_updateTruckCareGroupMemberToInactive', () => {
        it('calls action creator to update isActive status', () => {
            let eventKey = 2;
            let isActive = false;
            let updateTruckCareGroupMemberToInactive = sandbox.spy();

            let props = {
                actions: {
                    updateTruckCareGroupMemberToInactive
                }
            };

            let testObject = new TruckDetail(props);

            testObject._updateTruckCareGroupMemberToInactive(eventKey);

            assert(updateTruckCareGroupMemberToInactive.withArgs(eventKey).calledOnce, 'called props action method _updateTruckCareGroupMemberToInactive');
        });
    });

    describe('render', () => {
        it('renders the query string value tied to props', () => {
            let testObject = new TruckDetail({currentTruck: '2400'});

            let actual = testObject.render();

            let result = ShallowTestUtils.findAllWithType(actual, Panel);

            assert.strictEqual(result[0].props.children[0], '2400', 'currentTruck was rendered');
        });

        it('renders a CategoryDetails Component', () => {
            let categoryDetails = {};
            let actions = {};
            let testObject = new TruckDetail({categoryDetails, categoryDetailActions: actions});

            let result = testObject.render();

            let actual = ShallowTestUtils.findAllWithType(result, CategoryDetails);

            assert.strictEqual(actual.length, 1, 'one CategoryDetails component was rendered');
            assert.strictEqual(actual[0].props.actions, actions, 'actions was passed to CategoryDetails');
            assert.strictEqual(actual[0].props.categoryDetails, categoryDetails, 'categoryDetails was passed to CategoryDetails');
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
            assert.strictEqual(group[0].props.updateTruckCareGroupMemberToInactive, bound_inactive_function, 'bound updateTruckCareGroupMemberToInActive passed in as props to TruckCareGroup');
        });
    });
});
