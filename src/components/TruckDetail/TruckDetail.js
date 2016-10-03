/*eslint-disable react/jsx-no-bind */
import React, {Component,PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Grid, Panel} from 'react-bootstrap';
import TruckCareGroup from './TruckCareGroup';
import * as TruckCareGroupActions from '../../actions/TruckCareGroupActions';

export class TruckDetail extends Component {
    constructor(props) {
        super(props);
    }

    _updateTruckCareGroupMemberToActive(eventKey){
      this.props.actions.updateMemberIsActiveStatus(eventKey, true);
    }

    render() {
        return (
          <Grid>
            <TruckCareGroup updateTruckCareGroupMemberToActive={this._updateTruckCareGroupMemberToActive.bind(this)} truckCareGroup={this.props.truckCareGroup} />
            <Row>
              <Panel>
                {this.props.currentTruck}
              </Panel>
            </Row>
          </Grid>
        );
    }
}

TruckDetail.propTypes = {
    currentTruck: PropTypes.string.isRequired,
    truckCareGroup: PropTypes.object,
    actions: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  let currentTruck = ownProps.params.id;
    return {
      currentTruck,
      truckCareGroup: state.truckCareGroup
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TruckCareGroupActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetail);
