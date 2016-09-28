import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

const TruckCareGroupActiveMember = () => {
    return (
        <ButtonGroup className="button-group-spacing">
            <Button bsStyle="primary" bsSize="xsmall">Foo Bar</Button>
            <Button bsStyle="primary" bsSize="xsmall">
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </Button>
        </ButtonGroup>
    );
};

export default TruckCareGroupActiveMember;
