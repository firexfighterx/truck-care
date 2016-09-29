import React, {PropTypes} from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

const TruckCareGroupActiveMember = ({member}) => {
    return (
        <ButtonGroup className="button-group-spacing">
            <Button bsStyle="primary" bsSize="xsmall">{member.name}</Button>
            <Button bsStyle="primary" bsSize="xsmall">
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </Button>
        </ButtonGroup>
    );
};

TruckCareGroupActiveMember.propTypes = {
    member: PropTypes.object
};

export default TruckCareGroupActiveMember;
