import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import NavLink from './NavLink';

const Header = () => {
    return (
        <ul className="nav nav-pills">
            <NavLink to="/" isIndex={true}>Home</NavLink>
            <NavLink to="about">About Bitches</NavLink>
        </ul>
    );
};

export default Header;
