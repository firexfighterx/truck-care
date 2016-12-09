import React, {Component, PropTypes} from 'react';
import Responsibility from './Responsibility';
import {Col} from 'react-bootstrap';

const ResponsibilityGroupColumn = ({responsibilities, offset, md}) => {
  return(
      <Col md={md} mdOffset={offset}>{responsibilities.map(item => {
      return <Responsibility key={item.responsibilityId} responsibility={item} />;
    })}</Col>
  );
};

ResponsibilityGroupColumn.propTypes = {
  responsibilities: PropTypes.array,
  offset: PropTypes.number,
  md: PropTypes.number
};

export default ResponsibilityGroupColumn;
