import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {Panel, Label, Col} from 'react-bootstrap';
import ResponsibilityGroup from '../../../components/TruckDetail/ResponsibilityGroup';
import ResponsibilityOutcome from '../../../components/TruckDetail/ResponsibilityOutcome';
import ResponsibilityGroupColumn from '../../../components/TruckDetail/ResponsibilityGroupColumn';

describe('ResponsibilityGroup', () => {

    describe('render', () => {
        it('renders the ResponsibilityGroupColumn', () => {
            let responsibilityItem = {
                responsibilityId: 1,
                responsibility: "Truck Inventory"
            };
            let responsibilityItems = [responsibilityItem];

            let result = ResponsibilityGroup({responsibilityItems});

            let responsibilityGroupColumn = ShallowTestUtils.findAllWithType(result, ResponsibilityGroupColumn);

            assert.strictEqual(responsibilityGroupColumn.length, 3, 'one column was rendered');
        });

        it('renders the second ResponsibilityGroupColumn', () => {
            let firstResponsibilityItem = {
                responsibilityId: 1,
                responsibility: "Truck Inventory"
            };
            let secondResponsibilityItem = {
                responsibilityId: 2,
                responsibility: "Truck Washed"
            };
            let thirdResponsibilityItem = {
                responsibilityId: 3,
                responsibility: "Oil Checked"
            };
            let responsibilityItems = [firstResponsibilityItem, secondResponsibilityItem, thirdResponsibilityItem];

            let result = ResponsibilityGroup({responsibilityItems});

            let responsibilityGroupColumn = ShallowTestUtils.findAllWithType(result, ResponsibilityGroupColumn);

            assert.strictEqual(responsibilityGroupColumn.length, 3, 'three columns were rendered');
            assert.deepEqual(responsibilityGroupColumn[0].props.responsibilities, [firstResponsibilityItem], 'displays first responsibilityGroupColumn');
            assert.deepEqual(responsibilityGroupColumn[1].props.responsibilities, [secondResponsibilityItem], 'displays second responsibilityGroupColumn');
            assert.deepEqual(responsibilityGroupColumn[2].props.responsibilities, [thirdResponsibilityItem], 'displays third responsibilityGroupColumn');
        });

        it('renders a Label when no responsibilityItems are available', () => {
            let responsibilityItems = [];

            let result = ResponsibilityGroup({responsibilityItems});
            let label = ShallowTestUtils.findAllWithType(result, Label);

            assert.strictEqual(label.length, 1, 'one label rendered');
            assert.strictEqual(label[0].props.children, 'No Available Details', 'Label text was set when no items');
        });
    });
});
