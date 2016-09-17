import React, {PropTypes} from 'react';
import {Alert} from 'react-bootstrap';

const GlobalNotification = ({notification, onDismiss}) => {
    return (
        <div>
            <Alert bsStyle={notification.type} onDismiss={onDismiss}>
                <p>{notification.message}</p>
            </Alert>
        </div>
    );
};
GlobalNotification.propTypes = {
    notification: PropTypes.object.isRequired,
    onDismiss: PropTypes.object.isRequired
};

export default GlobalNotification;
