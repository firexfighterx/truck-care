import React, {PropTypes} from 'react';
import {FormControl} from 'react-bootstrap';

const FormInputControl = ({onChange, value, placeHolder}) => {
    return (
    <form> 
        <FormControl onChange={onChange} value={value} placeHolder={placeHolder} />
    </form>);
};

export default FormInputControl;