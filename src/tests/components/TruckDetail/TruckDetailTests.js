import sinon from 'sinon';
import assert from 'assert';
import * as ShallowTestUtils from 'react-shallow-testutils';
import {TruckDetail} from '../../../components/TruckDetail/TruckDetail';

describe('TruckDetail', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('render', () => {
    it('renders a the query string value tied to props', () => {
      let testObject = new TruckDetail({currentTruck: '2400'});

      let actual = testObject.render();

      assert.strictEqual(actual.props.children, '2400', 'currentTruck was rendered');
    });
  });
});
