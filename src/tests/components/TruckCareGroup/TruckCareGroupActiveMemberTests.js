import assert from 'assert';
import sinon from 'sinon';
import {ButtonGroup, Button} from 'react-bootstrap';
import * as ShallowTestUtils from 'react-shallow-testutils';
import TruckCareGroupActiveMember from '../../../components/TruckCareGroup/TruckCareGroupActiveMember';

describe('TruckCareGroupActiveMember', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('render', () => {
        it('renders a button group for an active member', () => {
            let member = {
                id: 1,
                name: 'Foo Barred'
            };
            let updateTruckCareGroupMemberToInactive = {
                bind: () => {}
            };

            let actual = TruckCareGroupActiveMember({member, updateTruckCareGroupMemberToInactive});

            let buttonGroup = ShallowTestUtils.findAllWithType(actual, ButtonGroup);
            let buttons = ShallowTestUtils.findAllWithType(actual, Button);

            assert.strictEqual(buttonGroup.length, 1, 'one button group was rendered');
            assert.strictEqual(buttons.length, 2, 'two buttons rendered');
            assert.strictEqual(buttons[0].props.children, 'Foo Barred', 'name was set as text');
        });
    });
});
