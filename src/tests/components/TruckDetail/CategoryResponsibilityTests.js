import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {Panel, Label} from 'react-bootstrap';
import CategoryResponsibility from '../../../components/TruckDetail/CategoryResponsibility';
import ResponsibilityOutcome from '../../../components/TruckDetail/ResponsibilityOutcome';

describe('CategoryResponsibility', () => {

    describe('render', () => {
        it('renders a Panel with the responsibilityItem', () => {
            let responsibilityItem = {
                responsibilityId: 1,
                responsibility: "Truck Inventory"
            };
            let responsibilityItems = [responsibilityItem];

            let result = CategoryResponsibility({responsibilityItems});
            let panels = ShallowTestUtils.findAllWithType(result, Panel);
            let responsibilityOutcome = ShallowTestUtils.findAllWithType(result, ResponsibilityOutcome);

            assert.strictEqual(panels.length, 1, 'one well was rendered');
            assert.strictEqual(panels[0].key, `${responsibilityItem.responsibilityId}`, 'id used as key for well');
            assert.strictEqual(responsibilityOutcome.length, 1, 'one outcome rendered');
        });

        it('renders a Label when no responsibilityItems are available', () => {
            let responsibilityItems = [];

            let result = CategoryResponsibility({responsibilityItems});
            let label = ShallowTestUtils.findAllWithType(result, Label);

            assert.strictEqual(label.length, 1, 'one label rendered');
            assert.strictEqual(label[0].props.children, 'No Available Details', 'Label text was set when no items');
        });
    });
});
