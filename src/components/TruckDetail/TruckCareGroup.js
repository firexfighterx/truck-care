import React, {PropTypes} from 'react';
import {
    Row,
    Col,
    Panel,
    Button,
    Label,
    ButtonGroup
} from 'react-bootstrap';
const TruckCareGroup = ({truckCareGroup}) => {
    return (
        <Row>
            <Col lg={8} md={8} mdOffset={2}>
                <Panel header={< h2 > Title < /h2>} bsStyle="primary">
                    <ButtonGroup>
                        <Button bsStyle="primary" bsSize="xsmall">Foo Bar</Button>
                        <Button bsStyle="primary" bsSize="xsmall">
                            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                        </Button>
                    </ButtonGroup>
                </Panel>
            </Col>
        </Row>
    );
};

TruckCareGroup.propTypes = {
    truckCareGroup: PropTypes.object
};

export default TruckCareGroup;
