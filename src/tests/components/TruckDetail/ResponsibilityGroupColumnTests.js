import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {Col} from 'react-bootstrap';
import ResponsibilityGroupColumn from '../../../components/TruckDetail/ResponsibilityGroupColumn';
import Responsibility from '../../../components/TruckDetail/Responsibility';

describe('ResponsibilityGroupColumn', () => {
    describe('render', () => {
        it('renders a Responsibility', () => {
            let responsibility = {};
            let responsibilities = [responsibility];

            let result = ResponsibilityGroupColumn({responsibilities});
            let items = ShallowTestUtils.findAllWithType(result, Responsibility);

            assert.strictEqual(items.length, 1, 'one responsibility was rendered');
            assert.strictEqual(items[0].props.responsibility, responsibility, 'responsibility was passed as prop');
        });

        it('renders a list of Responsibility components', () => {
            let firstResponsibility = {
                id: 1
            };
            let secondResponsibility = {
                id: 2
            };
            let responsibilities = [firstResponsibility, secondResponsibility];

            let result = ResponsibilityGroupColumn({responsibilities});
            let items = ShallowTestUtils.findAllWithType(result, Responsibility);

            assert.strictEqual(items.length, 2, 'one responsibility was rendered');
            assert.strictEqual(items[0].props.responsibility, firstResponsibility, 'responsibility was passed as prop');
            assert.strictEqual(items[1].props.responsibility, secondResponsibility, 'second property was passed as prop');
        });

        it('returns a col with correct offset and md', () => {
            let result = ResponsibilityGroupColumn({responsibilities: [], offset: 1, md: 3});

            let col = ShallowTestUtils.findAllWithType(result, Col);

            assert.strictEqual(col.length, 1, 'one col rendered');
            assert.strictEqual(col[0].props.mdOffset, 1, 'offset set on col');
            assert.strictEqual(col[0].props.md, 3, 'md set on col');
        });
    });
});
