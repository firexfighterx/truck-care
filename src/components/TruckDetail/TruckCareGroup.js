import React, {PropTypes} from 'react';
import {Row,Col,Panel, Label} from 'react-bootstrap';
import TruckCareGroupActiveMember from './TruckCareGroupActiveMember';
import TruckCareGroupAvailableMember from './TruckCareGroupAvailableMember';
const TruckCareGroup = ({truckCareGroup, updateTruckCareGroupMemberToActive, updateTruckCareGroupMemberToInactive}) => {

  let dropDown = (truckCareGroup.members || []).length > 0
  ? <TruckCareGroupAvailableMember updateTruckCareGroupMemberToActive={updateTruckCareGroupMemberToActive} members={truckCareGroup.members} /> : null;

  let activeMembers = (truckCareGroup.activeMembers || []).length > 0
  ? truckCareGroup.activeMembers.map(member => <TruckCareGroupActiveMember updateTruckCareGroupMemberToInactive={updateTruckCareGroupMemberToInactive} key={member.id} member={member} />)
  : <Label>No one actively performing Truck Care</Label>;

    let title = <h2>Truck Care Group: <strong>{truckCareGroup.groupName}</strong></h2>;
    return (
      <Row>
        <Col lg={8} md={8} mdOffset={2}>
          <Panel header={title} bsStyle="primary" >
            {activeMembers}
            {dropDown}
          </Panel>
        </Col>
      </Row>
    );
};

TruckCareGroup.propTypes = {
    truckCareGroup: PropTypes.object,
    updateTruckCareGroupMemberToActive: PropTypes.func,
    updateTruckCareGroupMemberToInactive: PropTypes.func
};

export default TruckCareGroup;
