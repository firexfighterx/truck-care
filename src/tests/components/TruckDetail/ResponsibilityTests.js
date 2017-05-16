import assert from 'assert';
import sinon from 'sinon';
import * as ShallowTestUtils from 'react-shallow-testutils';
import { Panel, Button } from 'react-bootstrap';
import { Responsibility } from '../../../components/TruckDetail/Responsibility';

describe('Responsibility', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('_handleThumbsUpButtonClick', () => {
        it('calls action creator to perform a thumbs up truckCare', () => {
            const users = [1, 2];
            const responsibilityId = 10;
            const truckId = 3;
            const responsibility = { responsibilityId };
            let performTruckCare = sandbox.spy();
            const expected = {
                users,
                responsibilityId,
                truckId,
                outcome: true
            };

            let testObject = new Responsibility({ users, responsibility, truckId, actions: { performTruckCare } });

            testObject._handleThumbsUpButtonClick(true);
            assert(performTruckCare.withArgs(expected).calledOnce, 'called action creator method');
        });
    });


    describe('render', () => {
        it('renders a Panel with the responsibility', () => {
            let responsibility = {
                responsibilityId: 1,
                responsibility: "Truck Inventory"
            };

            let testObject = new Responsibility({ responsibility });
            let result = testObject.render();
            let panel = ShallowTestUtils.findAllWithType(result, Panel);

            assert.strictEqual(panel.length, 1, 'one panel rendered');
            assert.strictEqual(panel[0].props.header, responsibility.responsibility, 'responsibility text set as panel header');
        });

        it('renders a perform TruckCare thumbs up Button', () => {
            let responsibility = {
                responsibilityId: 1,
                responsibility: "Truck Inventory"
            };
            const boundThumbsUp = () => { };
            let testObject = new Responsibility({ responsibility });
            let boundHandleThumbsUpClick = sandbox.stub(testObject._handleThumbsUpButtonClick, 'bind').returns(boundThumbsUp);

            let result = testObject.render();

            let button = ShallowTestUtils.findAllWithType(result, Button);
            
            assert(boundHandleThumbsUpClick.withArgs(testObject, true).calledOnce, 'called with testObject and true');
            assert.strictEqual(button.length, 1, 'one button rendered');
            assert.strictEqual(button[0].props.className, 'glyphicon glyphicon-thumbs-up', 'thumbs up set as classname');
            assert.strictEqual(button[0].props.onClick, boundThumbsUp, 'boundHandleThumbsUpClick was set as callback handler');
        });
    });
});
