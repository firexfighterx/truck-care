import React from 'react';
import {Link, IndexLink} from 'react-router';

class NavLink extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        let isActive = this.context.router.isActive(this.props.to, true);
        let activeClass = isActive
            ? "active"
            : "";

        let navigationLink = this.props.isIndex
            ? <IndexLink to={this.props.to}>
                    {this.props.children}
                </IndexLink>
            : <Link to={this.props.to}>
                {this.props.children}
            </Link>;

        return (
            <li className={activeClass}>{navigationLink}</li>
        );
    }
}
NavLink.contextTypes = {
    router: React.PropTypes.object
};

NavLink.propTypes = {
    to: React.PropTypes.string.isRequired,
    isIndex: React.PropTypes.bool.isRequired,
    children: React.PropTypes.string.isRequired
};

export default NavLink;
