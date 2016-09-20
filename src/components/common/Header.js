import React, {PropTypes} from 'react';
import {ListGroup, Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import NavLink from './NavLink';

const Header = ({trucks, dropDownClick}) => {
    let dropDownItems = trucks.map(truck => {
        return (
            <MenuItem key={truck.id} eventKey={truck.truckNumber}>
                {truck.truckNumber}
            </MenuItem>
        );
    });
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    Truck Care
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavDropdown title="Trucks" onSelect={dropDownClick}>
                        {dropDownItems}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

Header.propTypes = {
    trucks: PropTypes.arrayOf(PropTypes.object),
    dropDownClick: PropTypes.func
};

export default Header;
