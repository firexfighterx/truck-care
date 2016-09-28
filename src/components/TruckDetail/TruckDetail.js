import React, {Component,PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Grid, Panel} from 'react-bootstrap';
import TruckCareGroup from './TruckCareGroup';
import * as TruckCareActions from '../../actions/TruckListActions';

export class TruckDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Grid>
            <TruckCareGroup truckCareGroup={this.props.truckCareGroup} />
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
    truckCareGroup: PropTypes.object
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
        actions: bindActionCreators(TruckCareActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetail);
