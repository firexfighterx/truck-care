import React, {
    Component,
    PropTypes
} from 'react';
import {
    Link
} from 'react-router';
import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
import * as TruckCareActions from '../../actions/TruckCareActions';

class TruckDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {trucks} = this.props;
        let displayableTrucks = trucks.map(truck => {
            return <div key ={truck.id}> {truck.truckNumber} </div>;
        });

        return (<div>{displayableTrucks}</div>);
    }
}

TruckDetail.propTypes = {
    trucks: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        trucks: state.trucks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TruckCareActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TruckDetail);
