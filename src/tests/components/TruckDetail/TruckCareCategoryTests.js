import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {Label, Panel} from 'react-bootstrap';
import TruckCareCategory from '../../../components/TruckDetail/TruckCareCategory';
import ResponsibilityGroup from '../../../components/TruckDetail/ResponsibilityGroup';

describe('TruckCareCategory', () => {
    describe('render', () => {
        it('renders Category Containers', () => {
            let firstCategoryDetail = {
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

            let secondCategoryDetail = {
                category: "Truck Essentials",
                responsibilities: [
                    {
                        responsibilityId: 2,
                        truckNumber: "2412",
                        category: "Truck Essentials",
                        responsibility: "Oil"
                    }
                ]
            };
            let categoryDetails = [firstCategoryDetail, secondCategoryDetail];

            let testObject = new TruckCareCategory({categoryDetails});

            let result = testObject.render();
            let categoryResponsibilities = ShallowTestUtils.findAllWithType(result, ResponsibilityGroup);
            let categoryContainerPanels = ShallowTestUtils.findAllWithType(result, Panel);

            assert.strictEqual(categoryResponsibilities.length, 2, 'two Category Containers rendered');
            assert.strictEqual(categoryContainerPanels.length, 2, 'two panels rendered');
            assert.strictEqual(categoryResponsibilities[0].key, firstCategoryDetail.category, 'category used as key for first item');
            assert.strictEqual(categoryResponsibilities[0].props.responsibilityItems, firstCategoryDetail.responsibilities, 'responsibilities from first category passed as prop');
            assert.strictEqual(categoryResponsibilities[1].key, secondCategoryDetail.category, 'category used as key for second item');
            assert.strictEqual(categoryResponsibilities[1].props.responsibilityItems, secondCategoryDetail.responsibilities, 'responsibilities from second category passed as prop');
        });

        it('does not render a container when no categories available', () => {
            let categoryDetails = [];
            let message = 'No Available Details';

            let testObject = new TruckCareCategory({categoryDetails});

            let result = testObject.render();
            let categoryResponsibilities = ShallowTestUtils.findAllWithType(result, ResponsibilityGroup);
            let noCategoriesLabel = ShallowTestUtils.findAllWithType(result, Label);

            assert.strictEqual(categoryResponsibilities.length, 0, 'no category responsibilities rendered');
            assert.strictEqual(noCategoriesLabel.length, 1, 'one label rendered');
            assert.strictEqual(noCategoriesLabel[0].props.children, message, 'message text was set');
        });
    });
});
