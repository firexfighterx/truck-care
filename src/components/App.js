/*eslint-disable react/jsx-no-bind */
import React, {Component,PropTypes} from 'react';
import Sidebar from './common/Sidebar';
import GlobalNotification from './common/GlobalNotification';
import * as GlobalErrorActions from '../actions/GlobalErrorActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

export class App extends Component {

constructor(props){
  super(props);
}

_handleCloseGlobalNotification(){}

    render() {
        return (
            <div>
                <div>
                    <Sidebar trucks={this.props.trucks}/>
                </div>
                <div className="main-content-container">
                  <GlobalNotification onDismiss={this._handleCloseGlobalNotification.bind(this)} notification={this.props.globalNotification} />
                  {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    trucks: PropTypes.arrayOf(PropTypes.object),
    globalNotification: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        trucks: state.trucks
    };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators()
  };
}

export default connect(mapStateToProps)(App);
