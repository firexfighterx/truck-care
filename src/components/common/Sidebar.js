import React, {PropTypes} from 'react';
import {Link, IndexLink, browserHistory} from 'react-router';
import NavLink from './NavLink';

class Sidebar extends React.Component {
constructor(props){
  super(props);
}

componentDidMount(){
  let {trucks} = this.props;
  if(trucks.length > 0)
  {
    let firstTruck = trucks[0].truckNumber;
    browserHistory.push(`/TruckDetail/${firstTruck}`);
  }
}

render(){
  const {trucks} = this.props;
    let links = trucks.map(truck => {
      let url = `/TruckDetail/${truck.truckNumber}`;
        return <NavLink key={truck.id} to={url} isIndex={false}>{truck.truckNumber}</NavLink>;
    });

      return (
          <div className="left-nav-contents">
            <div className="col-lg-3 col-md-3 col-sm-4">
              <div className="list-group table-of-contents">
                {links}
              </div>
            </div>
          </div>
      );
  }
}

Sidebar.propTypes = {
    trucks: PropTypes.arrayOf(PropTypes.object)
};

export default Sidebar;
