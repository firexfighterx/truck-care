import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <ul className="nav nav-tabs">
      <li><IndexLink to="/" activeClassName="btn btn-link">Home</IndexLink></li>
      <li><Link to="/about" activeClassName="btn btn-link">About Bitches</Link></li>
    </ul>
  );
};

export default Header;
