import expect from 'expect';
import assert from 'assert';
import {
    createStore
} from 'redux';
import rootReducer from '../../reducers';
import initialState from '../../reducers/initialState';
import * as courseActions from '../../actions/courseActions';
import * as truckCareActions from '../../actions/TruckCareActions';

describe('Store', function() {
    it('Should handle creating courses', function() {
        // arrange
        const store = createStore(rootReducer, initialState);
        const course = {
            title: "Clean Code"
        };

        // act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        // assert
        const actual = store.getState().courses[0];
        const expected = {
            title: "Clean Code"
        };

        expect(actual).toEqual(expected);
    });

    it('should update store with dispatched trucks', () => {
        const store = createStore(rootReducer, initialState);
        let trucks = [{
            id: 1,
            truckName: '2400'
        }];

        let action = truckCareActions.loadTrucksSuccess(trucks);
        store.dispatch(action);

        let actual = store.getState().trucks;
        assert.deepEqual(actual, trucks, 'trucks was set on the state store');
    });
});
