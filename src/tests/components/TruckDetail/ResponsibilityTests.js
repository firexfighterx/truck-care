import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {Panel} from 'react-bootstrap';
import Responsibility from '../../../components/TruckDetail/Responsibility';

describe('Responsibility', () => {
    describe('render', () => {
        it('renders a Panel with the responsibility', () => {
            let responsibility = {
                responsibilityId: 1,
                responsibility: "Truck Inventory"
            };

            let result = Responsibility({responsibility});
            let panel = ShallowTestUtils.findAllWithType(result, Panel);

            assert.strictEqual(panel.length, 1, 'one panel rendered');
            assert.strictEqual(panel[0].props.header, responsibility.responsibility, 'responsibility text set as panel header');
        });
    });
});
