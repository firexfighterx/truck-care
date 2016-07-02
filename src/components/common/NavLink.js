import React from 'react';
import {Link, IndexLink} from 'react-router';

class NavLink extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <li>
                <Link to={this.props.to} className="inactive"></Link>
            </li>
        )
    }
}

export default NavLink;
