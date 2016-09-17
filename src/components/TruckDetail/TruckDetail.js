import React, {Component,PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TruckCareActions from '../../actions/TruckListActions';

export class TruckDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>{this.props.currentTruck}</div>);
    }
}

TruckDetail.propTypes = {
    currentTruck: PropTypes.string.isRequired
};


function mapStateToProps(state, ownProps) {
  let currentTruck = ownProps.params.id;
    return {
      currentTruck
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TruckCareActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetail);
