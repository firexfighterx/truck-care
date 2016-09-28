import React, {PropTypes} from 'react';
import {Row,Col,Panel, DropdownButton, MenuItem} from 'react-bootstrap';

import TruckCareGroupActiveMember from './TruckCareGroupActiveMember';
const TruckCareGroup = ({truckCareGroup}) => {

  let members = truckCareGroup.members.map(member => {
    return <MenuItem key={member.id} eventKey={member.id}>{member.name}</MenuItem>;
  });

    let title = <h2>Truck Care Group: <strong>{truckCareGroup.groupName}</strong></h2>;
    return (
      <Row>
        <Col lg={8} md={8} mdOffset={2}>
          <Panel header={title} bsStyle="primary" >
            <DropdownButton
              bsStyle="link"
              noCaret
              title="Add"
              id="add-truck-care-user">
              {members}
            </DropdownButton>
          </Panel>
        </Col>
      </Row>
    );
};

TruckCareGroup.propTypes = {
    truckCareGroup: PropTypes.object
};

export default TruckCareGroup;
