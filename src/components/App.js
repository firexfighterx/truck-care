import React, {Component,PropTypes} from 'react';
import Sidebar from './common/Sidebar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

export class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Sidebar trucks={this.props.trucks}/>
                </div>
                <div className="main-content-container">
                  {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    trucks: PropTypes.arrayOf(PropTypes.object)
};


function mapStateToProps(state, ownProps) {
    return {
        trucks: state.trucks
    };
}

export default connect(mapStateToProps)(App);
