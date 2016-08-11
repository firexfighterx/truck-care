import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import NavLink from './NavLink';

const Header = () => {
    return (
        <div className="left-nav-contents">
          <div className="col-lg-3 col-md-3 col-sm-4">
            <div className="list-group table-of-contents">
              <NavLink to="/" isIndex={true}>Home</NavLink>
              <NavLink to="about" isIndex={false}>About</NavLink>
              <NavLink to="courses" isIndex={false}>Course</NavLink>
            </div>
          </div>
        </div>
    );
};

export default Header;
