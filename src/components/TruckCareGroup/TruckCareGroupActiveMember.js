/*eslint-disable react/jsx-no-bind */
import React, {PropTypes} from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

const TruckCareGroupActiveMember = ({member, updateTruckCareGroupMemberToInactive}) => {
    return (
        <ButtonGroup className="button-group-spacing">
            <Button bsStyle="primary" bsSize="xsmall">{member.name}</Button>
            <Button bsStyle="primary" bsSize="xsmall" onClick={updateTruckCareGroupMemberToInactive.bind(this, member.id)}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </Button>
        </ButtonGroup>
    );
};

TruckCareGroupActiveMember.propTypes = {
    member: PropTypes.object,
    updateTruckCareGroupMemberToInactive: PropTypes.func
};

export default TruckCareGroupActiveMember;
