import expect from 'expect';
import NavLink from '../../../components/common/NavLink';
import * as ShallowTestUtils from 'react-shallow-testutils';
import { Link, IndexLink } from 'react-router';

describe('NavLink', () => {
    it('renders a nav link', () => {
        const TO = "blah";
        const LINK_TEXT = "foo";
        const PROPS = {
            to: TO,
            children: LINK_TEXT
        };
        const CONTEXT = {
            router: {
                isActive: () => {
                    return true;
                }
            }
        };

        let testObject = new NavLink(PROPS);
        testObject.context = CONTEXT;

        let result = testObject.render();
        let linkItems = ShallowTestUtils.findAllWithType(result, Link);

        expect(result.type).toEqual('li');
        expect(linkItems.length).toEqual(1);
        expect(linkItems[0].props.children).toEqual(LINK_TEXT);
        expect(linkItems[0].props.to).toEqual(TO);
    });


    it('renders a nav link with correct class when active', () => {
        const TO = "blah";
        const LINK_TEXT = "foo";
        const PROPS = {
            to: TO,
            children: LINK_TEXT
        };
        const CONTEXT = {
            router: {
                isActive: () => {
                    return true;
                }
            }
        };

        let testObject = new NavLink(PROPS);
        testObject.context = CONTEXT;

        let result = testObject.render();

        expect(result.props.className).toEqual("active");
    });


    it('renders a nav link with correct class when inactive', () => {
        const TO = "blah";
        const LINK_TEXT = "foo";
        const PROPS = {
            to: TO,
            children: LINK_TEXT
        };
        const CONTEXT = {
            router: {
                isActive: () => {
                    return false;
                }
            }
        };

        let testObject = new NavLink(PROPS);
        testObject.context = CONTEXT;

        let result = testObject.render();

        expect(result.props.className).toEqual("");
    });


    it('renders an IndexLink when isIndex set to true', () => {
        const TO = "blah";
        const LINK_TEXT = "foo";
        const PROPS = {
            to: TO,
            children: LINK_TEXT,
            isIndex: true
        };
        const CONTEXT = {
            router: {
                isActive: () => {
                    return true;
                }
            }
        };

        let testObject = new NavLink(PROPS);
        testObject.context = CONTEXT;

        let result = testObject.render();
        let indexLink = ShallowTestUtils.findAllWithType(result, IndexLink);

        expect(result.type).toEqual('li');
        expect(indexLink.length).toEqual(1);
        expect(indexLink[0].props.children).toEqual(LINK_TEXT);
        expect(indexLink[0].props.to).toEqual(TO);
    });


});
