import React, {PropTypes} from 'react';
import {MenuItem, DropdownButton} from 'react-bootstrap';

const TruckCareGroupAvailableMember = ({members}) => {
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
      id="add-truck-care-user">
      {items}
    </DropdownButton>
  );
};

TruckCareGroupAvailableMember.propTypes = {
    members: PropTypes.array
};

export default TruckCareGroupAvailableMember;
