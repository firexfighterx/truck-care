import React, {PropTypes} from 'react';
import {Row,Col,Panel, DropdownButton, MenuItem} from 'react-bootstrap';
import TruckCareGroupActiveMember from './TruckCareGroupActiveMember';
import TruckCareGroupAvailableMember from './TruckCareGroupAvailableMember';
const TruckCareGroup = ({truckCareGroup}) => {

  let dropDown = (truckCareGroup.members || []).length > 0
  ? <TruckCareGroupAvailableMember members={truckCareGroup.members} /> : null;

    let title = <h2>Truck Care Group: <strong>{truckCareGroup.groupName}</strong></h2>;
    return (
      <Row>
        <Col lg={8} md={8} mdOffset={2}>
          <Panel header={title} bsStyle="primary" >
            {dropDown}
          </Panel>
        </Col>
      </Row>
    );
};

TruckCareGroup.propTypes = {
    truckCareGroup: PropTypes.object
};

export default TruckCareGroup;
