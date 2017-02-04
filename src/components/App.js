/*eslint-disable react/jsx-no-bind */
import React, {Component,PropTypes} from 'react';
import Header from './common/Header';
import GlobalNotification from './common/GlobalNotification';
import * as GlobalMessageActions from '../actions/GlobalMessageActions';
import * as TruckIdActions from '../actions/TruckIdActions';
import {Grid, Row, Col} from 'react-bootstrap';
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
  return this.props.globalMessage.hasOwnProperty('type') && this.props.globalMessage.hasOwnProperty('message');
}

_handleMenuItemClick(eventKey){
  browserHistory.push(`/TruckDetail/${eventKey.truckNumber}`);
  this.props.truckIdActions.setTruckId(eventKey.id);
}

render() {
  let globalNotification = this._isGlobalErrorPresent()
    ? <GlobalNotification onDismiss={this._handleCloseGlobalNotification.bind(this)} notification={this.props.globalMessage} />
    : null;

    return (
      <Grid>
        <Row>
          <Header
            trucks={this.props.trucks}
            dropDownClick={this._handleMenuItemClick.bind(this)}/>
        </Row>
        {globalNotification}
        <Row>{this.props.children}</Row>
      </Grid>
    );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    trucks: PropTypes.arrayOf(PropTypes.object),
    globalMessage: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        trucks: state.trucks,
        globalMessage: state.globalMessage
    };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(GlobalMessageActions, dispatch), 
    truckIdActions: bindActionCreators(TruckIdActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
