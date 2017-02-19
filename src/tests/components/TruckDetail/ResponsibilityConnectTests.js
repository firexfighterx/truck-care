import assert from 'assert';
import sinon from 'sinon';
import * as redux from 'redux';
import * as Actions from '../../../actions/PerformTruckCareActions';
import * as testObject from '../../../components/TruckDetail/ResponsibilityConnect';

describe('ResponsibilityConnect', () => {
	let sandbox;
	beforeEach(() => {
		sandbox = sinon.sandbox.create();
	});

	afterEach(() => {
		sandbox.restore();
	});
	describe('mapStateToProps', () => {
		it('maps active user id to current props', () => {
			const state = {
				truckId: 1,
				truckCareGroup: {
					activeMembers: [{ id: 4 }]
				}
			};

			const expected = {
				truckId: 1,
				users: [4]
			};

			let actual = testObject.mapStateToProps(state);

			assert.deepEqual(actual, expected, 'mapped state to props for one user');
		});

		it('maps all active user ids to curent props', () => {
			const firstActiveMember = { id: 4 };
			const secondActiveMember = { id: 5 };
			const thirdActiveMember = { id: 6 };
			const state = {
				truckId: 1,
				truckCareGroup: {
					activeMembers: [firstActiveMember, secondActiveMember, thirdActiveMember]
				}
			};

			const expected = {
				truckId: 1,
				users: [4, 5, 6]
			};

			let actual = testObject.mapStateToProps(state);

			assert.deepEqual(actual, expected, 'mapped state to props for one user');
		});
	});

	describe('mapDispatchToProps', () => {
		it('maps perform truck care actions', () => {
			let boundActionResult = () => { return true; };
			let bindActionCreators = sandbox.stub(redux, 'bindActionCreators').returns(boundActionResult);

			const expected = { actions: boundActionResult };
            const dispatch = () => {};
            let actual = testObject.mapDispatchToProps(dispatch);

            assert(bindActionCreators.withArgs(Actions, dispatch).calledOnce, 'called bindActionCreators');
            assert.deepEqual(actual, expected, 'mapped action creator methods');
		});
	});
});