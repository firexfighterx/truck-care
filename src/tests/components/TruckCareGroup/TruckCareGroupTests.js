import sinon from 'sinon';
import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {Panel, Label} from 'react-bootstrap';
import TruckCareGroup from '../../../components/TruckCareGroup/TruckCareGroup';
import TruckCareGroupAvailableMember from '../../../components/TruckCareGroup/TruckCareGroupAvailableMember';
import TruckCareGroupActiveMember from '../../../components/TruckCareGroup/TruckCareGroupActiveMember';

describe('TruckCareGroup', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('render', () => {
        it('renders a Panel with the active Truck Care Group as the Title', () => {
            let truckCareGroup = {
                groupName: 'Group C',
                members: [],
                activeMembers: []
            };

            let actual = TruckCareGroup({truckCareGroup});

            let result = ShallowTestUtils.findAllWithType(actual, Panel);

            assert.strictEqual(result[0].props.header.props.children[0], 'Truck Care Group: ');
            assert.strictEqual(result[0].props.header.props.children[1].props.children, 'Group C');
            assert.strictEqual(result[0].props.bsStyle, 'primary');
        });

        it('does not render a drop down when members is null', () => {
            let truckCareGroup = {
                activeMembers: []
            };

            let actual = TruckCareGroup({truckCareGroup});

            let result = ShallowTestUtils.findAllWithType(actual, TruckCareGroupAvailableMember);

            assert.strictEqual(result.length, 0, 'no TruckCareGroupAvailableMember component was rendered');
        });

        it('renders an active truck care member when there are activeMembers', () => {
            let activeMembers = [
                {
                    id: 1,
                    name: 'Foo Bar'
                }
            ];
            let truckCareGroup = {
                activeMembers
            };
            let updateTruckCareGroupMemberToInactive = () => {};

            let actual = TruckCareGroup({truckCareGroup, updateTruckCareGroupMemberToInactive});

            let result = ShallowTestUtils.findAllWithType(actual, TruckCareGroupActiveMember);

            assert.strictEqual(result.length, 1, 'one Active Member was rendered');
            assert.strictEqual(result[0].props.updateTruckCareGroupMemberToInactive, updateTruckCareGroupMemberToInactive, 'updateTruckCareGroupMemberToInactive set as a prop');
        });

        it('renders a drop down with members that are available', () => {
            let members = [
                {
                    id: 1,
                    name: 'Foo Bar'
                }
            ];
            let truckCareGroup = {
                members
            };
            let updateTruckCareGroupMemberToActive = () => {};

            let actual = TruckCareGroup({truckCareGroup, updateTruckCareGroupMemberToActive});

            let result = ShallowTestUtils.findAllWithType(actual, TruckCareGroupAvailableMember);

            assert.strictEqual(result.length, 1, 'one TruckCareGroupAvailableMember component rendered');
            assert.strictEqual(result[0].props.updateTruckCareGroupMemberToActive, updateTruckCareGroupMemberToActive, 'updateTruckCareGroupMemberToActive set as a prop');
        });

        it('does not render active truck care member when no activeMembers', () => {
            let activeMembers = [];
            let truckCareGroup = {
                activeMembers
            };

            let actual = TruckCareGroup({truckCareGroup});

            let truckCareGroupActiveMember = ShallowTestUtils.findAllWithType(actual, TruckCareGroupActiveMember);
            let label = ShallowTestUtils.findAllWithType(actual, Label);

            assert.strictEqual(truckCareGroupActiveMember.length, 0, 'no Active Member was rendered');
            assert.strictEqual(label[0].props.children, 'No one actively performing Truck Care');
        });
    });
});
