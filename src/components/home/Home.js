import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component{
  render(){
    return (
      <div>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default Home;
