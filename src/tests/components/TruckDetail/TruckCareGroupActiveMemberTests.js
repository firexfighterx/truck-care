import assert from 'assert';
import {ButtonGroup, Button} from 'react-bootstrap';
import * as ShallowTestUtils from 'react-shallow-testutils';
import TruckCareGroupActiveMember from '../../../components/TruckDetail/TruckCareGroupActiveMember';

describe('TruckCareGroupActiveMember', () => {
    it('render', () => {
        let member = {
            id: 1,
            name: 'Foo Barred'
        };

        let actual = TruckCareGroupActiveMember({member});

        let buttonGroup = ShallowTestUtils.findAllWithType(actual, ButtonGroup);
        let buttons = ShallowTestUtils.findAllWithType(actual, Button);

        assert.strictEqual(buttonGroup.length, 1, 'one button group was rendered');
        assert.strictEqual(buttons.length, 2, 'two buttons rendered');
        assert.strictEqual(buttons[0].props.children, 'Foo Barred', 'name was set as text');
    });
});
