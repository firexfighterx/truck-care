import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {Panel, Label, Col} from 'react-bootstrap';
import ResponsibilityGroup from '../../../components/TruckDetail/ResponsibilityGroup';
import ResponsibilityOutcome from '../../../components/TruckDetail/ResponsibilityOutcome';

describe('ResponsibilityGroup', () => {

    describe('render', () => {
        it('renders a Panel with the responsibilityItem', () => {
            let responsibilityItem = {
                responsibilityId: 1,
                responsibility: "Truck Inventory"
            };
            let responsibilityItems = [responsibilityItem];

            let result = ResponsibilityGroup({responsibilityItems});
            let panels = ShallowTestUtils.findAllWithType(result, Panel);
            let responsibilityOutcome = ShallowTestUtils.findAllWithType(result, ResponsibilityOutcome);

            assert.strictEqual(panels.length, 1, 'one well was rendered');
            assert.strictEqual(panels[0].key, `${responsibilityItem.responsibilityId}`, 'id used as key for well');
            assert.strictEqual(responsibilityOutcome.length, 1, 'one outcome rendered');
        });

        it('renders a Label when no responsibilityItems are available', () => {
            let responsibilityItems = [];

            let result = ResponsibilityGroup({responsibilityItems});
            let label = ShallowTestUtils.findAllWithType(result, Label);

            assert.strictEqual(label.length, 1, 'one label rendered');
            assert.strictEqual(label[0].props.children, 'No Available Details', 'Label text was set when no items');
        });

        it('renders two list of items when more than one Panel', () => {
            const RESPONSIBILITY1 = 'Truck Inventory';
            const RESPONSIBILITY2 = 'Washed';
            const RESPONSIBILITY3 = 'Oil';
            let responsibilityItem1 = {
                responsibilityId: 1,
                responsibility: RESPONSIBILITY1
            };

            let responsibilityItem2 = {
                responsibilityId: 2,
                responsibility: RESPONSIBILITY2
            };

            let responsibilityItem3 = {
                responsibilityId: 2,
                responsibility: RESPONSIBILITY3
            };

            let responsibilityItems = [responsibilityItem1, responsibilityItem2, responsibilityItem3];

            let result = ResponsibilityGroup({responsibilityItems});
            let cols = ShallowTestUtils.findAllWithType(result, Col);

            assert.strictEqual(cols.length, 3, 'three Cols rendered');
            assert.strictEqual(cols[0].props.children[0].props.header, RESPONSIBILITY1, 'Truck Inventory in first row');
            assert.strictEqual(cols[1].props.children[0].props.header, RESPONSIBILITY2, 'Washed in second row');
            assert.strictEqual(cols[2].props.children[0].props.header, RESPONSIBILITY3, 'Oil in second row');
        });
    });
});
