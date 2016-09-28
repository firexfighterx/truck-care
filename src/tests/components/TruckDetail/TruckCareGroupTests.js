import sinon from 'sinon';
import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {Panel, DropdownButton, MenuItem} from 'react-bootstrap';
import TruckCareGroup from '../../../components/TruckDetail/TruckCareGroup';

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
                members: []
            };

            let actual = TruckCareGroup({truckCareGroup});

            let result = ShallowTestUtils.findAllWithType(actual, Panel);

            assert.strictEqual(result[0].props.header.props.children[0], 'Truck Care Group: ');
            assert.strictEqual(result[0].props.header.props.children[1].props.children, 'Group C');
            assert.strictEqual(result[0].props.bsStyle, 'primary');
        });

        it('renders a Drop Down in the Panel with the available Truck Care Group Members', () => {
            let members = [
                {
                    id: 1,
                    name: 'Joe Schmoe'
                }
            ];
            let truckCareGroup = {
                members
            };

            let actual = new TruckCareGroup({truckCareGroup});

            let result = ShallowTestUtils.findAllWithType(actual, DropdownButton);
            let menuItem = ShallowTestUtils.findAllWithType(actual, MenuItem);

            assert.strictEqual(result.length, 1, 'one drop down rendered');
            assert.strictEqual(result[0].props.title, 'Add');
            assert.strictEqual(menuItem[0].props.children, 'Joe Schmoe', 'Joe Schmoe was set as text');
            assert.strictEqual(menuItem[0].props.eventKey, 1, 'event key was set with id');

        });
    });
});
