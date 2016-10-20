/*eslint-disable react/jsx-no-bind */
import React, {Component,PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Grid, Panel} from 'react-bootstrap';
import TruckCareGroup from '../TruckCareGroup/TruckCareGroup';
import CategoryDetails from './CategoryDetails';
import * as TruckCareGroupActions from '../../actions/TruckCareGroupActions';
import * as CategoryDetailActions from '../../actions/CategoryDetailActions';

export class TruckDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps){
      this.props.categoryDetailActions.loadCategoryDetail(nextProps.currentTruck);
    }

    _updateTruckCareGroupMemberToActive(eventKey){
      this.props.actions.updateTruckCareGroupMemberToActive(eventKey);
    }

    _updateTruckCareGroupMemberToInactive(id){
      this.props.actions.updateTruckCareGroupMemberToInactive(id);
    }

    render() {
        let truckCareGroup = {
          updateTruckCareGroupMemberToActive: this._updateTruckCareGroupMemberToActive.bind(this),
          updateTruckCareGroupMemberToInactive: this._updateTruckCareGroupMemberToInactive.bind(this),
          truckCareGroup: this.props.truckCareGroup
        };

        let categoryDetails = {
          actions: this.props.categoryDetailActions,
          categoryDetails: this.props.categoryDetails
        };

        return (
          <Grid>
            <TruckCareGroup {...truckCareGroup} />
            <Row>
              <Panel>
                {this.props.currentTruck}
                <CategoryDetails {...categoryDetails} />
              </Panel>
            </Row>
          </Grid>
        );
    }
}

TruckDetail.propTypes = {
    currentTruck: PropTypes.string.isRequired,
    truckCareGroup: PropTypes.object,
    categoryDetails: PropTypes.object,
    actions: PropTypes.object,
    categoryDetailActions: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  let currentTruck = ownProps.params.id;
    return {
      currentTruck,
      categoryDetails: state.categoryDetails,
      truckCareGroup: state.truckCareGroup
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TruckCareGroupActions, dispatch),
        categoryDetailActions: bindActionCreators(CategoryDetailActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetail);
