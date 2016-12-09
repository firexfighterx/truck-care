import React, {Component, PropTypes} from 'react';
import {Panel} from 'react-bootstrap';

const Responsibility = ({responsibility}) => {
  return (
    <Panel header={responsibility.responsibility}>Yay!</Panel>
  );
};

Responsibility.propTypes = {
  responsibility: PropTypes.object
};

export default Responsibility;
