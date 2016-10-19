import sinon from 'sinon';
import assert from 'assert';
import * as actions from '../../actions/CategoryDetailActions';
import CategoryDetailReducer from '../../reducers/CategoryDetailReducer';

describe('CategoryDetailReducer', () => {
    let sandbox;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    describe('Default CategoryDetailReducer', () => {
        it('returns a new state when initial state is empty', () => {
            let detail = {
                category: "Truck Essentials",
                responsibilities: [
                    {
                        responsibilityId: 1,
                        truckNumber: "2412",
                        category: "Truck Essentials",
                        responsibility: "Truck Inventory"
                    }
                ]
            };

            let categoryDetails = [detail];
            let action = actions.loadCategoryDetailsSuccess(categoryDetails);

            let actual = CategoryDetailReducer([], action);

            assert.deepEqual(actual, categoryDetails, 'sets state with the provided category details');
        });

        it('returns a new state with a new list of Category Details when initial state has values', () => {
            let detail = {
                category: "Truck Essentials",
                responsibilities: [
                    {
                        responsibilityId: 1,
                        truckNumber: "2412",
                        category: "Truck Essentials",
                        responsibility: "Truck Inventory"
                    }
                ]
            };

            let initialStateDetail = {
                category: "Truck Essentials",
                responsibilities: [
                    {
                        responsibilityId: 2,
                        truckNumber: "2413",
                        category: "Truck Essentials",
                        responsibility: "Truck Inventory"
                    }
                ]
            };

            let details = [detail];
            let initialState = [initialStateDetail];
            let action = actions.loadCategoryDetailsSuccess(details);

            let actual = CategoryDetailReducer(initialState, action);

            assert.deepEqual(actual, details, 'sets state with the new provided list of category details');
        });

        it('returns a new state with an empty list of Category Details when initial state has values', () => {
            let initialStateDetail = {
                category: "Truck Essentials",
                responsibilities: [
                    {
                        responsibilityId: 2,
                        truckNumber: "2413",
                        category: "Truck Essentials",
                        responsibility: "Truck Inventory"
                    }
                ]
            };

            let details = [];
            let initialState = [initialStateDetail];
            let action = actions.loadCategoryDetailsSuccess(details);

            let actual = CategoryDetailReducer(initialState, action);

            assert.deepEqual(actual, details, 'sets state with the new provided list of category details');
        });

        it('returns current state when action type is unknown', () => {
            let detail = {
                category: "Truck Essentials",
                responsibilities: [
                    {
                        responsibilityId: 1,
                        truckNumber: "2412",
                        category: "Truck Essentials",
                        responsibility: "Truck Inventory"
                    }
                ]
            };

            let initialStateDetail = {
                category: "Truck Essentials",
                responsibilities: [
                    {
                        responsibilityId: 2,
                        truckNumber: "2413",
                        category: "Truck Essentials",
                        responsibility: "Truck Inventory"
                    }
                ]
            };

            let details = [detail];
            let initialState = [initialStateDetail];
            let action = {
                type: 'UNKNOWN_TYPE',
                categoryDetails: details
            };

            let actual = CategoryDetailReducer(initialState, action);

            assert.deepEqual(actual, initialState, 'state remains unchanged when unknown action is received');
        });
    });
});
