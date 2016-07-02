import expect from 'expect';
import NavLink from '../components/common/NavLink';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {
    Link
} from 'react-router';

describe('NavLink', () => {
    it('renders a nav link', () => {
        const TO = "blah"
        const PROPS = {
            to: TO
        };

        var testObject = new NavLink(PROPS);

        let result = testObject.render();
        console.log(result);
        let linkItems = ShallowTestUtils.findAllWithType(result, Link);
        console.log(linkItems);


        expect(result.type).toEqual('li');
        expect(linkItems.length).toEqual(1);
    });
});
