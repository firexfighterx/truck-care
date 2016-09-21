import sinon from 'sinon';
import assert from 'assert';
import {ListGroup, Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import * as ShallowTestUtils from 'react-shallow-testutils';
import NavLink from '../../../components/common/NavLink';
import Header from '../../../components/common/Header';

describe('Header', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('render', () => {

        it('renders a Navbar with a header and a brand', () => {
            let actual = new Header({trucks: []});

            let navbar = ShallowTestUtils.findAllWithType(actual, Navbar);
            let brand = ShallowTestUtils.findAllWithType(navbar[0], Navbar.Brand);
            let toggle = ShallowTestUtils.findAllWithType(actual, Navbar.Toggle);

            assert.strictEqual(navbar.length, 1, 'one navbar was rendered');
            assert.strictEqual(navbar[0].props.inverse, true, 'nav bar inverse set to true');
            assert.strictEqual(brand.length, 1, 'one brand was rendered');
            assert.strictEqual(brand[0].props.children, 'Truck Care', 'Truck Care text was rendered as header brand');
            assert.strictEqual(toggle.length, 1, 'one Header.Toggle was rendered');
        });

        it('renders nav links in drop down when trucks are available', () => {
            let truck_one = {
                id: 1,
                truckNumber: '2400'
            };
            let truck_two = {
                id: 2,
                truckNumber: '2495'
            };
            let trucks = [truck_one, truck_two];
            let dropDownClick = () => {};
            let result = new Header({trucks, dropDownClick});

            let navbarCollapse = ShallowTestUtils.findAllWithType(result, Navbar.Collapse);
            assert.strictEqual(navbarCollapse.length, 1, 'one navbarCollapse was rendered');
            let nav = ShallowTestUtils.findAllWithType(navbarCollapse[0], Nav);
            assert.strictEqual(nav.length, 1, 'one nav item was rendered inside navbar collapse');
            let navDropDown = ShallowTestUtils.findAllWithType(nav[0], NavDropdown);
            assert.strictEqual(navDropDown.length, 1, 'one nav drop down rendered');
            assert.strictEqual(navDropDown[0].props.title, 'Trucks', 'Trucks is the name of the drop down');
            assert.strictEqual(navDropDown[0].props.onSelect, dropDownClick, 'dropDownClick function was bound to onSelect');

            let menuItems = ShallowTestUtils.findAllWithType(navDropDown[0], MenuItem);

            assert.strictEqual(menuItems.length, 2, 'two MenuItem Items were rendered');
            assert.strictEqual(menuItems[0].props.children, truck_one.truckNumber, 'text of the first Menu Item was set to truckNumber');
            assert.strictEqual(menuItems[0].props.eventKey, `${truck_one.truckNumber}`, 'eventKey of the first Menu Item was set to truckId');
            assert.strictEqual(menuItems[0].key, `${truck_one.id}`, 'truck one id set as key');
            assert.strictEqual(menuItems[1].props.children, truck_two.truckNumber, 'text of the second Menu Item was set to truck number');
            assert.strictEqual(menuItems[1].props.eventKey, `${truck_two.truckNumber}`, 'eventKey of the second nav link was set to truckId');
            assert.strictEqual(menuItems[1].key, `${truck_two.id}`, 'truck one id set as key');
        });

        it('does not render any drop down items when no trucks available', () => {
            let trucks = [];
            let result = new Header({trucks});

            let navDropDown = ShallowTestUtils.findAllWithType(result, NavDropdown);

            assert.strictEqual(navDropDown.length, 0, 'no nav drop down was rendered');
        });
    });
});
