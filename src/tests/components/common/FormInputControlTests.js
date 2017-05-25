import FormInputControl from '../../../components/common/FormInputControl';
import * as ShallowTestUtils from 'react-shallow-testutils';
import assert from 'assert';
import {FormControl} from 'react-bootstrap';

describe('FormInput', () => {
    describe('render', () => {
        it('renders a form input control', () => {
            const onChange = () => {};
            let value = 'foo';
            let placeHolder = 'bar';
            
            let actual = FormInputControl({onChange, value, placeHolder});

            let formControls = ShallowTestUtils.findAllWithType(actual, FormControl);

            assert.strictEqual(formControls.length, 1, 'one FormInput was rendered');
            let formControl = formControls[0];

            assert.strictEqual(formControl.props.onChange, onChange, 'onChange event is prop on FormControl');
            assert.strictEqual(formControl.props.value, value, 'value is prop on FormControl');
            assert.strictEqual(formControl.props.placeHolder, placeHolder, 'placeHolder is prop on FormControl');
        });
    });
});