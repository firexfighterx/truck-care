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
            ? "list-group-item active"
            : "list-group-item";

        let navigationLink = this.props.isIndex
            ? <IndexLink className={activeClass} to={this.props.to}>
                    {this.props.children}
                </IndexLink>
            : <Link className={activeClass} to={this.props.to}>
                {this.props.children}
            </Link>;

        return (
            navigationLink
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
