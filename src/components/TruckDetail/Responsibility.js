/*eslint-disable react/jsx-no-bind */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as responsibilityConnect from './ResponsibilityConnect';
import { Panel, Button } from 'react-bootstrap';

export class Responsibility extends Component {
  constructor(props){
    super(props);
  }

  _handleThumbsUpButtonClick(outcome) { 
    let args = {
      users: this.props.users, 
      responsibilityId: this.props.responsibility.responsibilityId,
      truckId: this.props.truckId,
      outcome
    };

    this.props.actions.performTruckCare(args);
  }

  render() {
    return (
      <Panel header={this.props.responsibility.responsibility}>
        <Button bsStyle="success" className="glyphicon glyphicon-thumbs-up" onClick={this._handleThumbsUpButtonClick.bind(this, true)} />
      </Panel>
    );
  }
}

Responsibility.propTypes = {
  responsibility: PropTypes.object, 
  users: PropTypes.arrayOf(PropTypes.number),
  truckId: PropTypes.number,
  actions: PropTypes.object
};

export default connect(responsibilityConnect.mapStateToProps, responsibilityConnect.mapDispatchToProps)(Responsibility);
