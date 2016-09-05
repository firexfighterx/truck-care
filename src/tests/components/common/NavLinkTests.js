import assert from 'assert';
import NavLink from '../../../components/common/NavLink';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {
    Link,
    IndexLink
} from 'react-router';

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

        assert.strictEqual(result.type, Link, 'Link is type returned');
        assert.strictEqual(linkItems.length, 1, 'One link item returned');
        assert.strictEqual(linkItems[0].props.children, LINK_TEXT, 'text was set for the returned link');
        assert.strictEqual(linkItems[0].props.to, TO, 'to field was set');
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

        assert.strictEqual(result.props.className, "list-group-item active", 'correct css class was set');
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

        assert.strictEqual(result.props.className, 'list-group-item', 'correct css classname was set');
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

        assert.strictEqual(result.type, IndexLink, 'Index Link was the type returned');
        assert.strictEqual(indexLink.length, 1, 'only one index link was rendered');
        assert.strictEqual(indexLink[0].props.children, LINK_TEXT);
        assert.strictEqual(indexLink[0].props.to, TO, 'to field was set');
    });
});
