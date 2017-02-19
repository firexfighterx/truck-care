import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/PerformTruckCareActions';

export const mapStateToProps = (state) => {
	let users = state.truckCareGroup.activeMembers.map(user => {
		return user.id;
	});
	return {
		truckId: state.truckId,
		users
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
};