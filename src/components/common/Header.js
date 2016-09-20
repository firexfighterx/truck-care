import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import {ListGroup} from 'react-bootstrap';
import NavLink from './NavLink';

const Header = ({trucks}) => {
    let links = trucks.map(truck => {
      let url = `/TruckDetail/${truck.truckNumber}`;
      return <NavLink key={truck.id} to={url} isIndex={false}>{truck.truckNumber}</NavLink>;
    });
      return (
          <div className="left-nav-contents">
            <div className="col-lg-3">
              <ListGroup>
                {links}
              </ListGroup>
            </div>
          </div>
      );
};

Header.propTypes = {
    trucks: PropTypes.arrayOf(PropTypes.object)
};

export default Header;
