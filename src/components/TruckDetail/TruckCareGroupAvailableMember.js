import React, {PropTypes} from 'react';
import {MenuItem, DropdownButton} from 'react-bootstrap';

const TruckCareGroupAvailableMember = ({members, updateTruckCareGroupMemberToActive}) => {
  let items = members.map(member => {
    return (<MenuItem key={member.id} eventKey={member.id}>
      {member.name}
    </MenuItem>);
  });

  return (
    <DropdownButton
      bsStyle="link"
      noCaret
      title="Add"
      id="add-truck-care-user" onSelect={updateTruckCareGroupMemberToActive}>
      {items}
    </DropdownButton>
  );
};

TruckCareGroupAvailableMember.propTypes = {
    members: PropTypes.array,
    updateTruckCareGroupMemberToActive: PropTypes.func
};

export default TruckCareGroupAvailableMember;
