/*eslint-disable react/jsx-no-bind */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel, Button } from 'react-bootstrap';
import * as Actions from '../../actions/PerformTruckCareActions';

export class Responsibility extends Component {
  constructor(props){
    super(props);
  }

  _handleThumbsUpButtonClick() { 
    let args = {
      users: this.props.users, 
      responsibilityId: this.props.responsibility.responsibilityId,
      truckId: this.props.truckId,
      outcome: true
    };

    this.props.actions.performTruckCare(args);
  }

  render() {
    return (
      <Panel header={this.props.responsibility.responsibility}>
        <Button bsStyle="success" className="glyphicon glyphicon-thumbs-up" onClick={this._handleThumbsUpButtonClick.bind(this)} />
      </Panel>
    );
  }
}

const mapStateToProps = (state) => {
  let users = state.truckCareGroup.activeMembers.map(user => {return user.id;});
  return {
    truckId: state.truckId,
    users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

Responsibility.propTypes = {
  responsibility: PropTypes.object, 
  users: PropTypes.arrayof(PropTypes.number),
  truckId: PropTypes.number,
  actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Responsibility);
