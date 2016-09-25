import assert from 'assert';
import * as TruckCareGroupActions from '../../actions/TruckCareGroupActions';

describe('TruckCareGroupActions', () => {
    describe('groupListSuccess', () => {
        it('returns GET_TRUCK_CARE_GROUP_SUCCESS item to be dispatched', () => {
            let groupList = {
                groupName: 'Foo',
                members: []
            };
            let expected = {
                type: 'GET_TRUCK_CARE_GROUP_SUCCESS',
                groupList
            };
            let actual = TruckCareGroupActions.loadGroupSuccess(groupList);

            assert.deepEqual(actual, expected, 'returned GET_TRUCK_CARE_GROUP_SUCCESS action to be dispatched');
        });
    });
});
