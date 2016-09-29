import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import TruckCareGroupAvailableMember from '../../../components/TruckDetail/TruckCareGroupAvailableMember';

describe('TruckCareGroupAvailableMember', () => {
    describe('render', () => {
        it('renders a drop down when there are members', () => {
            let members = [
                {
                    id: 1,
                    name: 'Joe Schmoe'
                }
            ];

            let actual = new TruckCareGroupAvailableMember({members});

            let result = ShallowTestUtils.findAllWithType(actual, DropdownButton);
            let menuItem = ShallowTestUtils.findAllWithType(actual, MenuItem);

            assert.strictEqual(result.length, 1, 'one drop down rendered');
            assert.strictEqual(result[0].props.title, 'Add');
            assert.strictEqual(menuItem[0].props.children, 'Joe Schmoe', 'Joe Schmoe was set as text');
            assert.strictEqual(menuItem[0].props.eventKey, 1, 'event key was set with id');
        });
    });
});
