/*eslint-disable react/jsx-no-bind */
import React, {Component,PropTypes} from 'react';
import Header from './common/Header';
import GlobalNotification from './common/GlobalNotification';
import * as GlobalErrorActions from '../actions/GlobalErrorActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

export class App extends Component {

constructor(props){
  super(props);
}

_handleCloseGlobalNotification(){
  this.props.actions.setGlobalError({});
}

_isGlobalErrorPresent(){
  return this.props.globalErrorNotification.hasOwnProperty('type') && this.props.globalErrorNotification.hasOwnProperty('message');
}

render() {
  let globalNotification = this._isGlobalErrorPresent()
    ? <GlobalNotification onDismiss={this._handleCloseGlobalNotification.bind(this)} notification={this.props.globalErrorNotification} />
    : null;

    return (
        <div>
            <div className="main-content-container">
              {globalNotification}
              <Header trucks={this.props.trucks}/>
              {this.props.children}
            </div>
        </div>
    );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    trucks: PropTypes.arrayOf(PropTypes.object),
    globalErrorNotification: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        trucks: state.trucks,
        globalErrorNotification: state.globalErrorNotification
    };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(GlobalErrorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
