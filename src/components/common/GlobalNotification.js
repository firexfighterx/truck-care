import React, {PropTypes} from 'react';
import {Alert, Row, Col} from 'react-bootstrap';

const GlobalNotification = ({notification, onDismiss}) => {
    return (
      <Row>
        <Col xs={6} md={4} />
        <Col xs={6} md={4} >
          <Alert
            bsStyle={notification.type}
            onDismiss={onDismiss}>
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true">
            </span>
            <span className="global-alert">
              {notification.message}
            </span>
          </Alert>
        </Col>
        <Col xs={6} md={4} />
      </Row>
    );
};
GlobalNotification.propTypes = {
    notification: PropTypes.object.isRequired,
    onDismiss: PropTypes.object.isRequired
};

export default GlobalNotification;
