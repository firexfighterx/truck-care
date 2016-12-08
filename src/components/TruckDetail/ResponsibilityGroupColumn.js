import React, {Component, PropTypes} from 'react';
import Responsibility from './Responsibility';
import {Row} from 'react-bootstrap';

const ResponsibilityGroupColumn = ({responsibilities, offset, md}) => {
  return(
      <Row md={md} mdOffset={offset}>{responsibilities.map(item => {
      return <Responsibility key={item.id} responsibility={item} />;
    })}</Row>
  );
};

ResponsibilityGroupColumn.propTypes = {
  responsibilities: PropTypes.array,
  offset: PropTypes.int,
  md: PropTypes.int
};

export default ResponsibilityGroupColumn;
